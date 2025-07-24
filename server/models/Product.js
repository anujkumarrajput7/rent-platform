const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  pricePerMonth: Number,
  available: Boolean
});

module.exports = mongoose.model('Product', productSchema);
