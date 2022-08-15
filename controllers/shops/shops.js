const { Product } = require("../../models/product");
const { Cart } = require("../../models/cart");
const { filterObject, filteredCart } = require("../../util/helper");

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
  const allProducts = Product.fetchAll().map((prod) => prod.id);
  req.session.cart = req.session.cart || { products: {}, totalAmount: 0 };

  req.session.cart.products = Cart.updateCart(req.session.cart, (key) =>
    allProducts.includes(key)
  );

  req.session.cart.totalAmount = Cart.getTotal(
    req.session.cart,
    (value, key) => key.quantity * key.price
  );

  res.render("shops/cart", {
    cart: req.session.cart,
    pageTitle: "My Cart",
    path: "/shops/cart",
  });
}

function addToCart(req, res, next) {
  const product = Product.findById(req.params.id);
  req.session.cart = req.session.cart || { products: {}, totalAmount: 0 };
  Cart.addProduct(product, req.session.cart);
  res.render("shops/cart", {
    cart: req.session.cart,
    pageTitle: "Checkout",
    path: "/shops/cart",
  });
}

// gets all products
function updateCart(req, res, next) {
  req.session.cart = req.session.cart || { products: {}, totalAmount: 0 };
  Cart.updateCartItem(req.params.id, req.session.cart, req.body.quantity);
  res.render("shops/cart", {
    cart: req.session.cart,
    pageTitle: "My Cart",
    path: "/shops/cart",
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
  updateCart,
};
