const mongoose = require("mongoose");

const topProductSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  sold_amount: { type: Number, required: true },
  unit_price: { type: Number, required: true },
  revenue: { type: Number, required: true },
  rating: { type: Number, required: true },
});

const TopProductModel = mongoose.model("top_product", topProductSchema);

module.exports = {
  TopProductModel,
};
