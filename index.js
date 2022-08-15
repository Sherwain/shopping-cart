const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");
// const ejsMate = require("ejs-mate");
const app = express();

const rootDir = require("./util/path");

const { router: adminRoutes } = require("./routes/admins");
const { router: shopRoutes } = require("./routes/shops");
const { router: errorRoutes } = require("./routes/errors");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use(
  session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    name: "sessionId",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    resave: false,
  })
);

app.use("/", (req, res, next) => {
  console.log(req.path);
  next();
});

app.use("/admins", adminRoutes);
app.use("/shops", shopRoutes);

// error handler
app.use(errorRoutes);

app.listen(3000);
