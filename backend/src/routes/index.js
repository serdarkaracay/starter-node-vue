var express = require("express");
var router = express.Router();
const Column = require("../models/column");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/column", function (req, res, next) {
  const column = new Column({ name: "test" }).save();
  console.log(column);
  res.send(column);
});

module.exports = router;
