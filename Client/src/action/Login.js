import * as actionTypes from "./actiontypes";
import axios from "axios";

const dispatch_login = data => {
  return {
    type: actionTypes.LOGIN,
    payload: data
  };
};

export const login = objUser => dispatch => {
  console.log("Inaction:", objUser);
  var result = {
    isvaliduser: false,
    usertype: "",
    username: ""
  };
  if (objUser.username === "admin") {
    result.isvaliduser = true;
    result.usertype = "ADMIN";
    result.username = objUser.username;
  } else {
    result.isvaliduser = false;
    result.usertype = "GUEST";
    result.username = "GUEST";
  }

  dispatch({
    type: actionTypes.LOGIN,
    result
  });
};

export const loginserver = objUser => dispatch => {
  console.log(objUser)
  axios({
    method: "POST",
    url: "http://localhost:5002/api/login",
    data: objUser
  }).then(res => {
    dispatch({
      type: actionTypes.LOGIN,
      result: res.data
    });
  });
};
