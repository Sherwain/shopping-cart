function index(req, res, next) {
  res
    .status(404)
    .render("errors/error", { pageTitle: "Page Not Found", path: "/error" });
}

module.exports = { index };
