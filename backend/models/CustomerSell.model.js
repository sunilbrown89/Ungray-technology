const mongoose = require("mongoose");

const customerSellSchema = new mongoose.Schema({
  date: { type: String, required: true },
  web_sales: { type: Number, required: true },
  offline_sales: { type: Number, required: true },
});

const CustomerSellModel = mongoose.model("customer_sell", customerSellSchema);

module.exports = {
  CustomerSellModel,
};
