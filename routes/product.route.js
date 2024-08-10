const express = require("express");
const {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProductById,
  deleteProductById,
} = require("../controllers/product.controllers");
const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.post("/", addProduct);

router.put("/:id", updateProductById);

router.delete("/:id", deleteProductById);

module.exports = router;
