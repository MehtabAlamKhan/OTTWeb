import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const initialState = {
  token: localStorage.getItem("xts0"),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const authApi = createApi({
  name: "auth",
  initialState,
  reducers: {

  },
});
