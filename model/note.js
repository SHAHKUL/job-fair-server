const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    complete: {
      type: Boolean,
    },
    time: {
      type: String,
    },
    color: {
      type: String,
    },
    important: {
      type: Boolean,
    },
    created: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Notes = mongoose.model("notes", Schema);
module.exports = Notes;
