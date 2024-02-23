import { createContext, useContext, useRef } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const activeItem = { id: 0, ref: useRef(null) };
  const values = { activeItem };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
