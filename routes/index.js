var express = require("express");
var request = require("request");
var router = express.Router();
const bodyParser = require("body-parser");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("home", { header: "Weather App" });
});

router.post("/", function(req, res) {
  let link = "https://api.openweathermap.org/data/2.5/weather?q=";
  let city = req.body.city;
  let api_key = "&appid=05bb610c5b145f70cd91f5ad63c99529";
  let celcius = "&units=metric";
  let url = link + city + api_key + celcius;
  request(url, function(err, response, body) {
    if (err) {
      res.render("home", { temp: "Error, please try again" });
    } else {
      let data = JSON.parse(body);
      console.log(data);
      if (data.main == undefined) {
        res.render("home", {
          temp: "Sorry, I cannot find this city"
        });
      } else {
        res.render("home", {
          temp: `${Math.round(data.main.temp)}°C`,
          main: data.weather[0].main,
          city: data.name + ",",
          country: data.sys.country
        });
      }
    }
  });
});

module.exports = router;
