const { Router } = require("express");
const { TopProductModel } = require("../models/TopProduct.model");
const topProductController = Router();

topProductController.get("/", async (req, res) => {
  try {
    const topProductData = await TopProductModel.find();
    res.json({ topProductData });
    // console.log("topProductData", topProductDatas);
  } catch (err) {
    res.status(500).send("Failed to fetch Top product datas");
  }
});

topProductController.post("/create", async (req, res) => {
  const { product_name, sold_amount, unit_price, revenue, rating } = req.body;
  const topProductDatas = new TopProductModel({
    product_name,
    sold_amount,
    unit_price,
    revenue,
    rating,
  });
  try {
    await topProductDatas.save();
    res.send("Top product data created successfully");
  } catch (err) {
    res.status(500).send("Failed to create Top product data");
  }
});

module.exports = {
  topProductController,
};
