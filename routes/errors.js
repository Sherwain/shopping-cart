const errorController = require("../controllers/msc/error");

const express = require("express");
const router = express.Router();

router.get("*", errorController.index);

module.exports = { router };
