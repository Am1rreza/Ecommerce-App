import {
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,
} from "./userTypes";

const initialState = {
  loading: true,
  user: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case SIGNIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        user: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
