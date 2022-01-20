const mongoose = require("mongoose");

const dbSchema = mongoose.Schema({
  title: {
    type: "string",
  },
  des: {
    type: "string",
  },
  date: {
    type: "string",
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

const Connect = mongoose.model("NoteSchema", dbSchema);

module.exports = Connect;
