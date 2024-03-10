import { createContext, useEffect, useRef, useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { axiosPrivate } from "../api/axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { authTokens, setAuthTokens } = useAuthContext();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const activeItem = { id: 0, ref: useRef(null) };
  const values = { userData, setUserData, activeItem };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUser = async () => {
      try {
        console.log(authTokens);
        const response = await axiosPrivate.post(process.env.REACT_APP_USER_GET_USER_URL, JSON.stringify({ refreshToken: authTokens.refreshToken }), {
          signal: controller.signal,
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        console.log("UserContext:useEffect", response.data);
        if (isMounted) {
          setUserData(response.data);
        }
      } catch (error) {
        navigate("/login", { state: { from: "/user" }, replace: true });
      }
    };
    getUser();
    return () => {
      isMounted = false;
      controller.abort();
      console.log("User unmounted!");
    };
  }, [authTokens, setAuthTokens, navigate]);

  if (authTokens !== null) return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
