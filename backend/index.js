const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { comparisonYearController } = require("./routes/comparisonYear.routes");
const { topProductController } = require("./routes/topProduct.routes");
const { customerSellController } = require("./routes/customerSell.routes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Ungray Technologies");
});

app.use(cors());
app.use("/comparisons", comparisonYearController);
app.use("/topProducts", topProductController);
app.use("/customerSells", customerSellController);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (err) {
    console.log("Error connnecting to DB");
    console.log(err);
  }
  console.log(`listening on PORT: 8080`);
});
