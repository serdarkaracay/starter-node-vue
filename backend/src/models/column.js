const mongoose = require("mongoose");
const Task = require("./Task");

const Column = new mongoose.Schema({
  name: String,
  tasks: ["Task"],
  code: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("Column", Column);

new module.exports({ name: "test" }).save();
