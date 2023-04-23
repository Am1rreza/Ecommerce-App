import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useReducerAsync } from "use-reducer-async";
import Router from "next/router";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return { user: null, error: null, loading: true };

    case "SIGNIN_SUCCESS":
      return { user: action.payload, error: null, loading: false };

    case "SIGNIN_REJECT":
      return { user: null, error: action.error, loading: false };

    default:
      return { ...state };
  }
};

const asyncActionHandlers = {
  SIGNIN:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post("http://localhost:5000/api/user/signin", action.payload, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success("خوش آمدید");
          dispatch({ type: "SIGNIN_SUCCESS", payload: res.data });
          Router.push("/");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
        });
    },
  SIGNUP:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post("http://localhost:5000/api/user/signup", action.payload, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success("ثبت نام موفقیت آمیز بود");
          dispatch({ type: "SIGNIN_SUCCESS", payload: res.data });
          Router.push("/signin");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
        });
    },
  SIGNOUT: () => {},
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );

  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
