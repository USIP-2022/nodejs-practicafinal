const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["PENDING", "PAID"],
    required: true
  },
  products: {
    type: String,
    required: true
  },
});

const User = mongoose.model("Cart", userSchema);
module.exports = Cart;
