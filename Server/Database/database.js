var mysql = require("mysql");


var connection = mysql.createPool({
  host: "remotemysql.com",
  user: "8dyJ0xOiy1",
  password: "nhRiLBqgVX",
  database: "8dyJ0xOiy1",
  port: 3306,
  });

module.exports.connection = connection;


