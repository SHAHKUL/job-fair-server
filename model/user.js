const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("admins", Schema);
module.exports = Admin;
