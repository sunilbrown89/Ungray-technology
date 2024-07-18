const mongoose = require("mongoose");

const comparisonYearSchema = new mongoose.Schema({
  month: { type: String, required: true },
  last_year: { type: Number, required: true },
  this_year: { type: Number, required: true },
});

const ComparisonYearModel = mongoose.model(
  "comparison_year",
  comparisonYearSchema
);

module.exports = {
  ComparisonYearModel,
};
