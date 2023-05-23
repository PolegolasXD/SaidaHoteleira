const router = require("express").Router();

router.get("/", function (req, res) {
  res.send(`Ola eu sou Sistema`);
});

module.exports = router;
