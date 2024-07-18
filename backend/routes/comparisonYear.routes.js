const { Router } = require("express");
const { ComparisonYearModel } = require("../models/ComparisonYear.model");

const comparisonYearController = Router();

comparisonYearController.get("/", async (req, res) => {
  try {
    const comparisonYearData = await ComparisonYearModel.find();
    res.json({ comparisonYearData });
    // console.log("comparisonYearData", comparisonYearData);
  } catch (err) {
    res.status(500).send("Failed to fetch comparison wise year datas");
  }
});

comparisonYearController.post("/create", async (req, res) => {
  const { month, last_year, this_year } = req.body;
  const comparisonYearData = new ComparisonYearModel({
    month,
    last_year,
    this_year,
  });
  try {
    await comparisonYearData.save();
    res.send("Comparison wise year data created successfully");
  } catch (err) {
    res.status(500).send("Failed to create comparison wise year data");
  }
});

comparisonYearController.patch("/edit/:comparisonYearId", async (req, res) => {
  const { comparisonYearId } = req.params;
  const editBlog = await ComparisonYearModel.findOneAndUpdate(
    { _id: comparisonYearId, userId: req.body.userId },
    req.body
  );
  if (editBlog) {
    res.send("Comparison wise year data updated");
  } else {
    res.status(500).send("Failed to update comparison wise year data");
  }
});

comparisonYearController.delete(
  "/delete/:comparisonYearId",
  async (req, res) => {
    const { comparisonYearId } = req.params;
    const deletedBlog = await ComparisonYearModel.findOneAndDelete({
      _id: comparisonYearId,
      userId: req.body.userId,
    });
    if (deletedBlog) {
      res.status(200).send("Comparison wise year data deleted");
    } else {
      res.status(500).send("Failed to delete comparison wise year data");
    }
  }
);

module.exports = {
  comparisonYearController,
};
