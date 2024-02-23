import { useEffect } from "react";
import { FlexRow, FullScreen } from "../components/container/Container.styles";
import ServersSideBar from "../components/sideBar/ServersSideBar";
import styled from "styled-components";

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

function User() {
  console.log("User rendered!");

  useEffect(() => {
    return () => console.log("User unmounted!");
  }, []);

  return (
    <FullScreen>
      <Background>
        <FlexRow>
          <ServersSideBar></ServersSideBar>
          <MainSideBar></MainSideBar>
        </FlexRow>
        <MainContainer></MainContainer>
      </Background>
    </FullScreen>
  );
}

export default User;
