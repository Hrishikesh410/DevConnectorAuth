import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

//We initialize store here
// initialState is empty at first
const initialState = {};

//add middleware thunk as of now
const middleWare = [thunk];

//Create store using createStore method
//Methid takes rootReduces, initialState and applyMiddleware function.
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWare)
);
export default store;
