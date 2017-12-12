const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  score: Integer,
  date: { type: Date, default: Date.now }
});

const user = mongoose.model("User", userSchema);

module.exports = User;
