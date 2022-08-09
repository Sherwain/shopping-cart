const { Product } = require("../../models/product");

//list of a subset of the products for shopping
function index(req, res, next) {
  const products = Product.fetchAll();
  res.render("shops/", {
    prods: products,
    pageTitle: "Shop",
    path: "/shops",
  });
}

// gets all products
function products(req, res, next) {
  const products = Product.fetchAll();
  res.render("shops/product-list", {
    prods: products,
    pageTitle: "All Products",
    path: "/shops/products",
  });
}

function cart(req, res, next) {
  const products = Product.fetchAll();
  res.render("shops/cart", {
    pageTitle: "My Cart",
    path: "/shops/cart",
  });
}

function addToCart(req, res, next) {
  // const products = Product.fetchAll();
  const product = Product.findById(req.params.id);
  res.render("shops/cart", {
    prods: product,
    pageTitle: "Checkout",
    path: "/product-details",
  });
}

function checkout(req, res, next) {
  const products = Product.fetchAll();
  res.render("shops/checkout", {
    pageTitle: "Checkout",
    path: "/shops/checkout",
  });
}

function productDetails(req, res, next) {
  const products = Product.fetchAll();
  res.render("shops/product-details", {
    prods: products,
    pageTitle: "Checkout",
    path: "/product-details",
  });
}

// gets all orders
function orders(req, res, next) {
  res.render("shops/orders", {
    prods: Product.fetchAll(),
    pageTitle: "Orders",
    path: "/shops/orders",
  });
}

// show details of products
function show(req, res, next) {
  const product = Product.findById(req.params.id);
  console.log("req.params.id", req.params.id, product);
  res.render("shops/show", {
    product: product,
    pageTitle: product.title,
    path: "/shops/products",
  });
}

module.exports = {
  index,
  cart,
  checkout,
  products,
  show,
  addToCart,
  orders,
};
