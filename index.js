const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");

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
  .connect(
    "mongodb+srv://vvishwas179:lpxJ7htkfcTkx8wN@backenddb.m0yafu4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to DataBase!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err, "Connection Failed");
  });
