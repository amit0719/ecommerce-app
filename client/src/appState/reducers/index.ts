import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  products: productReducer,
  cart: cartReducer,
  categories: categoryReducer,
  order: orderReducer,
});

export default rootReducer;
