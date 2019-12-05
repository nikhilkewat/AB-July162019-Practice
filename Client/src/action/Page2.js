import * as actionTypes from "./actiontypes";
import axios from "axios";

const dispatch_login = data => {
  return {
    type: actionTypes.LOGIN,
    payload: data
  };
};


export const getUserList = () => dispatch => {
  
  axios({
    method: "GET",
    url: "http://localhost:5002/api/getuserlist",
      }).then(res => {
    dispatch({
      type: actionTypes.USER_LIST,
      result: res.data
    });
  });
};
