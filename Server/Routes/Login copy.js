var express = require("express");
const login = express();

login.post("/login",  function(req, res) {
    var appData = {};
    var username = req.body.username;
    var password = req.body.password;
    database.connection.getConnection(function(err, connection) {
      if (err) {
        appData["servererror"] = err;
        appData["error"] = 1;
        appData["data"] = "Internal Server Error";
        res.status(500).json(appData);
      } else {
        var a =
          "Select a.*,asm.IsFilled, asm.Id AS StudentId FROM  acuserlogin a join admission_student_master asm on asm.UserId = a.Id and asm.IsActive=1 and asm.IsDelete=0  where UserName=" +
          connection.escape(username) +
          " and `Password` =" +
          connection.escape(password) +
          " and a.IsActive=1 and a.IsDelete=0;";
        a = a + dbQueries.getPayVendor;
  
        connection.query(database.queryPreFix(req.UsersDetails.db) + a, function(
          err,
          rows,
          fields
        ) {
          if (err) {
            appData.error = 1;
            appData["data"] = "Error Occured!";
            res.status(400).json(appData);
          } else {
            if (rows[1].length > 0) {
              if (rows[1][0].Password == password) {
                let token = jwt.sign(
                  {
                    // // id: rows[1][0].Id,
                    // userid: rows[1][0].Id,
                    // id: rows[1][0].StudentId,
                    // studentid: rows[1][0].StudentId,
                    // userName: rows[1][0].UserName,
                    // usertypeid: rows[1][0].UserTypeId,
                    // isFilled: rows[1][0].IsFilled,
                    // paymentvendor: rows[2],
                    // clientCode: rows[1][0].ClientCode
                    id: rows[1][0].Id,
                    userName: rows[1][0].UserName,
                    usertypeid: rows[1][0].UserTypeId,
                    isFilled: rows[1][0].IsFilled,
                    paymentvendor: rows[2],
                    clientCode: rows[1][0].ClientCode
                  },
                  keys.Secret,
                  {
                    expiresIn: 6000 // expires in 24 hours
                  }
                );
                token = cryptr.encrypt(token);
                appData.error = 0;
                appData["token"] = token;
                appData["userDetails"] = rows[1];
                appData["paymentvendor"] = rows[2];
                res.status(200).json(appData);
              } else {
                appData.error = 1;
                appData["data"] = "Password does not match";
                res.status(204).json(appData);
              }
            } else {
              appData.error = 1;
              appData["data"] = "Username and password does not match.";
  
              res.status(203).json(appData);
            }
          }
          try {
            connection.release();
          } catch (ex1) {}
        });
      }
    });
  });

  module.exports=login;