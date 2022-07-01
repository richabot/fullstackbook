import {
  GET_LOGIN_ERROR,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  LOGOUT,
} from "./authtypes";
import axios from "axios";

export const getLoginAPI = (params) => (dispatch) => {
  dispatch({ type: GET_LOGIN_REQUEST });
  return axios
    .post(`https://reqres.in/api/login`, params)
    .then((r) => dispatch({ type: GET_LOGIN_SUCCESS, payload: r.data }))
    .catch((err) => dispatch({ type: GET_LOGIN_ERROR, payload: err }));
};

export const logout = () => ({ type: LOGOUT });
