const express = require("express");
const path = require("path");
const app = express();

const OperationPort = 3000;

// Use
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Router
const front = require("./src/routes/front.routers");
const api = require("./src/routes/api.routers");

app.use("/api/", api);
app.use("/", front);

// Status 404 Scenario
app.use((req, res) =>
  res.status(404).sendFile(path.join(__dirname, "public/404Error.html"))
);

// Start System
app.listen(OperationPort, () => {
  console.log(
    "Servidor ligado e disponivel em: http://localhost:" + OperationPort,
    "Para desligar o server, digite: ctrl + C"
  );
});