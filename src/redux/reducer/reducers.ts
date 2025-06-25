import { combineReducers } from "@reduxjs/toolkit";
import loginDetail from "./loginDetail";
import getLengthSlice  from './getLength'

const rootReducer = combineReducers({
    loginDetail: loginDetail,
    getLengthSlice : getLengthSlice 
});


export default rootReducer;