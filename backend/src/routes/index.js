var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/event", function (req, res, next) {
  debugger;
  res.send("Event response");
});

module.exports = router;
