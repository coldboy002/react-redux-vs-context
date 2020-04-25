import { combineReducers } from "redux";
import shopReducer from "./shop";

export default combineReducers({
  cart: shopReducer
});
