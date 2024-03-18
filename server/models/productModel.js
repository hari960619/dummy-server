const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    trim: true,
  },
  image: {
    type: [String],
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("product", productSchema);
