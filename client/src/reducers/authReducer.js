import {
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADING,
  USER_LOADED,
  CLEAR_ERRORS,
  FAVORITE_ADDED,
  FAVORITE_DELETED,
  BOOKMARK_SUCCESS,
  BOOKMARK_DELETED,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("xts0"),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case FAVORITE_ADDED:
      let newFavorites = state.user.favorites.slice();
      newFavorites.push(action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          favorites: newFavorites,
        },
      };
    case FAVORITE_DELETED:
      console.log(action.payload);
      let newFavorite = state.user.favorites.filter(
        (bk) => bk.id !== action.payload.id
      );
      //   console.log(newFavorite);
      return {
        ...state,
        user: {
          ...state.user,
          favorites: newFavorite,
        },
      };
    case BOOKMARK_SUCCESS:
      let newBookmarks = state.user.bookmarks.slice();
      newBookmarks.push(action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          bookmarks: newBookmarks,
        },
      };
    case BOOKMARK_DELETED:
      let newBookmark = state.user.bookmarks.filter(
        (bk) => bk.id !== action.payload.id
      );
      //   console.log(newBookmark);
      return {
        ...state,
        user: {
          ...state.user,
          bookmarks: newBookmark,
        },
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("xts0", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("xts0");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
}
