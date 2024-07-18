const mongoose = require("mongoose");
require("dotenv").config();
const URL =
  "mongodb+srv://sunilsahu:sunil123@cluster0.5xqkbiv.mongodb.net/ungray?retryWrites=true&w=majority&appName=Cluster0";
// const connection = mongoose.connect(process.env.MONGO_URL)
const connection = mongoose.connect(URL);

module.exports = {
  connection,
};
