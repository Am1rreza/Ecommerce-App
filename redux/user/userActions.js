import axios from "axios";
import {
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,
} from "./userTypes";

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

//? we dispatch the appropiate actions :
export const fetchUsers = () => {
  //? recieves the dispach method as arguments
  return (dispatch) => {
    dispatch(signinUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // const users = response.data.map((user) => user.name);
        dispatch(signinUserSuccess(response.data));
        // dispatch({type:FETCH_USERS_SUCCESS,payload:response.data});
      })
      .catch((error) => {
        dispatch(signinUserFailure(error.message));
      });
  };
};
