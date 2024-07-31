const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
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
