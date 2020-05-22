const mongoose = require("mongoose");
const id = require("shortid");

const Task = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  voters: {
    type: [String],
    default: [],
  },
  tags: {
    type: [String],
  },
  user: {
    type: "ObjectId",
    ref: "User",
  },
  participants: [
    {
      type: "ObjectId",
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Task", Task);
