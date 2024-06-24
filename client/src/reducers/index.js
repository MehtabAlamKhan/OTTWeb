import { combineReducers } from "redux";

import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  reducer: { auth: authReducer, error: errorReducer },
});
