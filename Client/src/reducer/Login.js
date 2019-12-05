import * as actionTypes from "../action/actiontypes";

const initialstate={
    username:'',
    password:'',
    isvaliduser:false,
    isloggedin:false
}

export const login=(state=initialstate,action)=>{
    switch (action.type) {
        case actionTypes.LOGIN:  
        console.log("InReducer:",action);      
          return {
            ...state,
            ...action.result
          };
        default:
          return state;
      }
    }