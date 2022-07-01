import {
  GET_LOGIN_ERROR,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  LOGOUT,
} from "./authtypes";

const initialState = {
  isLoading: false,
  isError: false,
  token: "",
  isAuth: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_LOGIN_SUCCESS: {
      return { ...state, isLoading: false, token: payload, isAuth: true };
    }
    case GET_LOGIN_ERROR: {

      return { ...state, isError: true, isAuth: false, token: "" };
    }
    case LOGOUT: {
      return { ...state, isError: false, isAuth: false };
    }
    default: {
      return state;
    }
  }
};
