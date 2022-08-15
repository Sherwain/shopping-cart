const shopController = require("../controllers/shops/shops");

const express = require("express");
const router = express.Router();

//endpoint to delete an item from cart
router.post("/cart/:id", shopController.updateCart);

// view cart
router.get("/cart", shopController.cart);

//check out products
router.get("/checkout", shopController.checkout);

//get to view all products
router.get("/products", shopController.products);

//get the index page to view all products to show
router.get("/", shopController.index);

// add customer items to cart
router.get("/add-to-cart/:id", shopController.addToCart);

// add customer items to cart
router.get("/orders", shopController.orders);

//endpoint to show details of a product
router.get("/:id", shopController.show);

module.exports = { router };
