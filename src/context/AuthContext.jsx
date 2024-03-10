import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(null);
  const values = { authTokens, setAuthTokens };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
