const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide product name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [2, "Name must be at least 2 characters"],
  },
  photo: {
    type: String,
    required: [true, "Please provide an image"],
  },
});

module.exports = mongoose.model("Product", productSchema);
