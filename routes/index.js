var express = require("express");
var request = require("request");
var router = express.Router();
const bodyParser = require("body-parser");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("home", { header: "Weather App" });
});

module.exports = router;
