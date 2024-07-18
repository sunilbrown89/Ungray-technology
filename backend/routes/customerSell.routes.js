const { Router } = require("express");
const { CustomerSellModel } = require("../models/CustomerSell.model");
const customerSellController = Router();

customerSellController.get("/", async (req, res) => {
  try {
    const customerSellData = await CustomerSellModel.find();
    res.json({ customerSellData });
    // console.log("customerSellData", customerSellData);
  } catch (err) {
    res.status(500).send("Failed to fetch Top product datas");
  }
});

customerSellController.post("/create", async (req, res) => {
  const { date, web_sales, offline_sales } = req.body;
  const customerSellData = new CustomerSellModel({
    date,
    web_sales,
    offline_sales,
  });
  try {
    await customerSellData.save();
    res.send("Top product data created successfully");
  } catch (err) {
    res.status(500).send("Failed to create Top product data");
  }
});

module.exports = {
  customerSellController,
};
