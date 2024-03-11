import { combineReducers } from "redux";

import authReducer from "./authReducer";
import ordersReducer from "./ordersReducer";

export default combineReducers({
  authReducer,
  ordersReducer,
});
