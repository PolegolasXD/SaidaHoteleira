const router = require("express").Router();

router.get("/", function (req, res) {
  res.send(`API Sistema`);
});

router.get("/:code", (req, res) => {
  res.send(`API Sistema ` + req.params.code);
});

module.exports = router;