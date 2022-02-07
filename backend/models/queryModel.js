const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [2, "Name must be at least 2 characters"],
  },
  query: {
    type: String,
    required: [true, "Please provide your name"],
  },
  number: {
    type: Number,
    required: [true, "Please provide your number"],
  },
  product: {
    type: String,
    required: [true, "Please provide product name"],
  },
});

module.exports = mongoose.model("Query", querySchema);
