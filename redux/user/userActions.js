import {
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
} from "./userTypes";
import http from "@/services/httpService";

export const signinUserRequest = () => {
  return {
    type: SIGNIN_USER_REQUEST,
  };
};

export const signinUserSuccess = (users) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: users,
  };
};

export const signinUserFailure = (error) => {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error,
  };
};

export const signupUserRequest = () => {
  return {
    type: SIGNUP_USER_REQUEST,
  };
};

export const signupUserSuccess = (users) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: users,
  };
};

export const signupUserFailure = (error) => {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error,
  };
};

export const userSignin = (data) => {
  return (dispatch) => {
    dispatch(signinUserRequest());
    http
      .post("/user/signin", data, { withCredentials: true })
      .then((response) => {
        dispatch(signinUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(signinUserFailure(error.message));
      });
  };
};

export const userSignup = (data) => {
  return (dispatch) => {
    dispatch(signupUserRequest());
    http
      .post("/user/signup", data, { withCredentials: true })
      .then((response) => {
        dispatch(signupUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(signupUserFailure(error.message));
      });
  };
};
