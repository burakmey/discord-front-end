import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuthContext from "./useAuthContext";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { authTokens } = useAuthContext();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${authTokens.accessToken}`;
        }
        return config;
      },
      (error) => {
        console.log("useAxiosPrivate:useEffect:REQUEST-Intercept");
        console.error(error);
        Promise.reject(error);
      }
    );
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => {
        console.log("responseIntercept success!", response);
        return response;
      },
      async (error) => {
        console.log("useAxiosPrivate:useEffect:RESPONSE-Intercept error!");
        console.error(error);
        const previousRequest = error?.config;
        const newAccessToken = await refresh()
          .then(() => {
            previousRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
            return axiosPrivate(previousRequest);
          })
          .catch((error) => Promise.reject(error));
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
      console.log("useAxiosPrivate unmounted!");
    };
  }, [authTokens, refresh]);
  return axiosPrivate;
};

export default useAxiosPrivate;
