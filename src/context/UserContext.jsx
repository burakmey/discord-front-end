import { createContext, useContext, useEffect, useRef } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { authData } = useAuthContext();
  const navigate = useNavigate();
  console.log(authData);
  useEffect(() => {
    if (authData === null) {
      navigate("/login", { replace: true });
    }
  }, [navigate, authData]);
  const activeItem = { id: 0, ref: useRef(null) };
  const values = { activeItem };
  if (authData !== null) return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
