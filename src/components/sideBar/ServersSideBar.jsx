import { useEffect } from "react";
import SideBarItem from "./SideBarItem";
import styled from "styled-components";

function ServersSideBar() {
  console.log("ServersSideBar rendered!");

  useEffect(() => {
    return () => console.log("ServersSideBar unmounted!");
  }, []);

  return (
    <SideBar>
      <SideBarItem id={0} />
      <SideBarItem id={1} />
      <Separator />
      <SideBarScroller>
        <SideBarItem id={2} />
        <SideBarItem id={3} />
        <SideBarItem id={4} />
      </SideBarScroller>
      <Separator />
      <SideBarItem id={5} />
    </SideBar>
  );
}

export default ServersSideBar;

const SideBar = styled.nav`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 72px;
  height: 100%;
  align-items: center;
  padding: 12px 0 4px;
  list-style-type: none;
`;
const SideBarScroller = styled.div`
  width: 100%;
  height: 100%;
  min-height: 64px;
  overflow: hidden scroll;
  scrollbar-width: none;
`;
const Separator = styled.div`
  width: 32px;
  min-height: 2px;
  border-radius: 1px;
  margin: 0 0 8px 0;
  background-color: var(--background-modifier-accent);
`;
