const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const gymRegistrationRoute = require("./routes/gymRegistration.route");
require("dotenv").config();
const app = express();

// Advanced usage to allow specific origins
app.use(
  cors({
    origin: "https://gymregistrationapp.onrender.com", // Replace with your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
    credentials: false, // Allow credentials (cookies, authorization headers, etc.)
  })
);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);
app.use("/api/registration", gymRegistrationRoute);

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
