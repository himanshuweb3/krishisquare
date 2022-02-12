const mongoose = require("mongoose");

const escrowQuerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [2, "Name must be at least 2 characters"],
  },
  number: {
    type: Number,
    required: [true, "Please provide your number"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
  },
});

module.exports = mongoose.model("Escrow", escrowQuerySchema);
