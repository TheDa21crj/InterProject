const mongoose = require("mongoose");

const dbSchema = mongoose.Schema({
  rule: {
    type: "string",
    // required: true,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

const Connect = mongoose.model("rulesList", dbSchema);

module.exports = Connect;
