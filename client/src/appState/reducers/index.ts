import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  products: productReducer,
  cart: cartReducer,
  categories: categoryReducer,
});

export default rootReducer;
