var express = require("express");
var databaseConnection = require("../Database/database");
var mysqlescape = require("mysql-named-params-escape");
const page2 = express();



page2.get("/getuserlist", function(req, res) {
  
  var obj = {
    error: false,
    success: true,
    data: [],
    
  };

  var query = "select * from User";
  
  databaseConnection.connection.query(query,(err,res1,rows)=>{

        obj.data = res1;
        res.status(201).json(obj);
  })
});


module.exports = page2;
