import { useEffect } from "react";
import { FlexRow, FullScreen } from "../components/container/Container.styles";
import ServersSideBar from "../components/sideBar/ServersSideBar";
import styled from "styled-components";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useUserContext from "../hooks/useUserContext";
import useAuthContext from "../hooks/useAuthContext";

function User() {
  console.log("User rendered!");
  const axiosPrivate = useAxiosPrivate();
  const { authTokens } = useAuthContext();
  const { userData, setUserData } = useUserContext();

  const refreshUserData = async () => {
    try {
      const response = await axiosPrivate.post(process.env.REACT_APP_USER_GET_USER_URL, JSON.stringify({ refreshToken: authTokens.refreshToken }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log("User:refreshUserData success!", response.data);
      setUserData(response.data);
    } catch (error) {
      console.log("Refresh token has tried to get new access token!");
      console.error(error);
    }
  };

  return (
    <FullScreen>
      <button onClick={() => refreshUserData()}>REFRESH</button>
      <Background>
        <FlexRow>
          <ServersSideBar />
          <MainSideBar />
        </FlexRow>
        <MainContainer />
      </Background>
    </FullScreen>
  );
}

export default User;

const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgb(30, 31, 34);
  overflow: auto;
`;
const MainSideBar = styled.div`
  display: flex;
  width: 240px;
  height: 100%;
  background-color: rgb(43, 45, 49);
  flex-direction: column;
`;
const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgb(49, 51, 56);
`;
