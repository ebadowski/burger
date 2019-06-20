var connection = require("../config/connection.js");

function objToSql(obj) {
  var arr = [];
  for (var key in obj) {
    var value = obj[key];
    if (Object.hasOwnProperty.call(obj, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {

  allItems: function (table, callback) {
    var query = "SELECT * FROM " + table;

    connection.query(query, function (err, result) {
      callback(result);
    });
  },

  searchItem: function (table, item, callback) {
    var query = "select * from " + table + " where routeName=?";

    connection.query(query, [item], function (err, result) {
      callback(result);
    });
  },

  addItem: function (table, cols, vals, callback) {
    var query = "INSERT INTO " + table + " (";
    query += cols.toString();
    query += ") VALUES (";
    for (var i in vals) {
      query += " ? "
    }
    query += ") ";

    console.log(query);

    connection.query(query, vals, function (err, result) {
      if (err) throw err;

      callback(result);
    });
  },
  updateItem: function (table, objColVals, condition, callback) {
    var query = "UPDATE " + table;

    query += " SET ";
    query += objToSql(objColVals);
    query += " WHERE ";
    query += condition;

    console.log(query);
    connection.query(query, function (err, result) {
      if (err) throw err;

      callback(result);
    });
  }
};

module.exports = orm;
