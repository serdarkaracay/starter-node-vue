const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: String,
  tasks: [
    {
      type: "ObjectId",
      ref: "Taks",
    },
  ],
});

module.exports = mongoose.model("User", User);
