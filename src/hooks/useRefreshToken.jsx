import useAuthContext from "./useAuthContext";
import axios from "../api/axios";

const useRefreshToken = () => {
  const { authTokens, setAuthTokens } = useAuthContext();
  const refresh = async () => {
    try {
      console.log("Old refresh token:", authTokens.refreshToken);
      const response = await axios.post(process.env.REACT_APP_AUTH_LOGIN_WITH_REFRESH_TOKEN_URL, JSON.stringify({ refreshToken: authTokens.refreshToken }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log("useRefreshToken: new authTokens success!", response.data);
      setAuthTokens(response.data);
      return response.data.accessToken;
    } catch (error) {
      console.error("Refresh token expired!", error);
    }
  };
  return refresh;
};

export default useRefreshToken;
