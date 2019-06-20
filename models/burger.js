var orm = require("../config/orm.js");

var burger = {
  allItems: function(callback) {
    orm.allItems("burgers", function(results) {
      callback(results);
    });
  },
  addItem: function(cols, vals, callback) {
    orm.addItem("burgers", cols, vals, function(results) {
      callback(results);
    });
  },
  searchItem: function(item, callback) {
    orm.allItems("burgers", item, function(results) {
      callback(results);
    });
  },
  updateItem: function(objColVals, condition, callback) {
    orm.updateItem("burgers", objColVals, condition, function(results) {
      callback(results);
    });
  }
};

module.exports = burger;