const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
require("dotenv").config();
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to DataBase!");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err, "Connection Failed");
  });
