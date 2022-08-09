const productController = require("../controllers/admin/products");

const express = require("express");
const router = express.Router();

//endpoint form to create a new product
router.get("/new", productController.newProduct);

//endpoint form to update an existing product
router.get("/:id/edit", productController.edit);

//endpoint to update an existing product
router.put("/:productId", productController.update);

//endpoint to delete an existing product
router.delete("/:id", productController.deleteProduct);

//endpoint to create a new product
router.post("/products", productController.create);

//endpoint to list all admin products
router.get("/", productController.index);

module.exports = { router };
