import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = {
  user: null,
  loading: true,
  error: null,
};

const reducer = (state, acion) => {
  switch (acion.type) {
  }
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, initialState);

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
