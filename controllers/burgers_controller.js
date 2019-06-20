var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");


router.get("/", function (req, res) {
  burgers.allItems(function (data) {
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});


router.post("/api/burgers", function (req, res) {
  burgers.addItem( ["burger_name"], [req.body.burger_name], function (data) {
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});


router.put("/api/burgers/:id", function (req, res) {
  var condition = "burger_id = " + req.params.id;

  burgers.updateItem({ devoured: req.body.devoured }, condition, function (data) {
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});

module.exports = router;
