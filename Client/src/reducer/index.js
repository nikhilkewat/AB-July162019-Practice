import { combineReducers } from "redux";

import {login} from "./Login";
import {getUserList} from "./Page2";
//import {newreducers} from "./newfile"

export default combineReducers({
    login,
    getUserList
    //newreducer
})