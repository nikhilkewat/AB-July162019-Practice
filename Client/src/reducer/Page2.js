import * as actionTypes from "../action/actiontypes";

const initialstate={
   data:[]
}

export const getUserList=(state=initialstate,action)=>{
    switch (action.type) {
        case actionTypes.USER_LIST:  
        
          return {
            ...state,
            ...action.result
          };
        default:
          return state;
      }
    }