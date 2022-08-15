const { Product } = require("../../models/product");

//provides form to update existing product
function edit(req, res, next) {
  const { id } = req.params;
  const product = Product.findById(id);
  res.render("admins/edit", {
    pageTitle: "Edit Product",
    path: "/admins/edit",
    product: product,
  });
}

//provides form to add new product
function newProduct(req, res, next) {
  res.render("admins/new", {
    pageTitle: "Add Product",
    path: "/admins/new",
  });
}

//handles the creation of the new product
function create(req, res, next) {
  const { product } = req.body;
  new Product(
    product.title,
    product.imgUrl,
    product.description,
    product.price
  ).save();
  res.redirect("/admins");
}

//handles the updating of an existing product
function update(req, res, next) {
  console.log("req.params", req.params);
  const { id } = req.params;
  const product = Product.findByIdAndUpdate(id, req.body.product);
  console.log("product update", product);
  const products = Product.fetchAll();
  res.render("admins/", {
    prods: products,
    pageTitle: "All Products",
    path: "/admins",
  });
}

// gets all products
function index(req, res, next) {
  const products = Product.fetchAll();
  res.render("admins/", {
    prods: products,
    pageTitle: "All Products",
    path: "/admins",
  });
}

// gets all products
function deleteProduct(req, res, next) {
  Product.deleteById(req.params.id);
  res.render("admins/", {
    prods: Product.fetchAll(),
    pageTitle: "All Products",
    path: "/admins",
  });
}

module.exports = {
  newProduct,
  create,
  index,
  edit,
  update,
  deleteProduct,
};
