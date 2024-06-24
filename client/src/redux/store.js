import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import errorReducer from "./features/error/errorSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
  },
});

export default store;
