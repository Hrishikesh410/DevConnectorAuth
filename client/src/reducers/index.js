import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";

//Create a file to combine Reducers
export default combineReducers({ alert ,auth});
