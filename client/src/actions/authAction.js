import axios from "axios";
import { getError, clearError } from "../redux/features/error/errorSlice";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  CLEAR_ERRORS,
  FAVORITE_ADDED,
  FAVORITE_DELETED,
  BOOKMARK_SUCCESS,
  BOOKMARK_DELETED,
} from "./types";

const baseurl = "http://localhost:5000/";

export const loaduser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get(`${baseurl}api/getuser`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
      dispatch({
        type: CLEAR_ERRORS,
      });
    })
    .catch((err) => {
      err.response &&
        dispatch(getError(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

export const login =
  ({ username, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ username, password });

    axios
      .post(`${baseurl}api/user/login`, body, config)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
        dispatch({
          type: CLEAR_ERRORS,
        });
        window.location.reload();
      })
      .catch((err) => {
        dispatch(
          getError(err.response.data, err.response.status, "LOGIN_FAIL")
        );
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  };

export const register =
  ({ username, email, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ username, email, password });

    axios
      .post(`${baseurl}api/user/register`, body, config)
      .then((res) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        dispatch(clearError());
      })
      .catch((err) => {
        dispatch(
          getError(err.response.data, err.response.status, "REGISTER_FAIL")
        );
        dispatch({
          type: REGISTER_FAIL,
        });
      });
  };

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const bookmark =
  ({ id, media_type }) =>
  (dispatch, getState) => {
    axios
      .post(
        `${baseurl}api/user/bookmarks`,
        { id, media_type },
        tokenConfig(getState)
      )
      .then((res) => {
        dispatch({
          type: BOOKMARK_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  };

export const deleteBookmark =
  ({ id, media_type }) =>
  (dispatch, getState) => {
    const config = tokenConfig(getState);
    config.data = { id, media_type };
    axios
      .delete(`${baseurl}api/user/bookmarks`, config)
      .then((res) => {
        dispatch({
          type: BOOKMARK_DELETED,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const favorite =
  ({ id, media_type }) =>
  (dispatch, getState) => {
    console.log("favorite called");
    axios
      .post(
        `${baseurl}api/user/favorites`,
        { id, media_type },
        tokenConfig(getState)
      )
      .then((res) => {
        dispatch({
          type: FAVORITE_ADDED,
          payload: res.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  };

export const deleteFavorite =
  ({ id, media_type }) =>
  (dispatch, getState) => {
    console.log("delete favorite called");

    const config = tokenConfig(getState);
    config.data = { id, media_type };
    axios
      .delete(`${baseurl}api/user/favorites`, config)
      .then((res) => {
        dispatch({
          type: FAVORITE_DELETED,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["auth-tok"] = token;
  }
  return config;
};
