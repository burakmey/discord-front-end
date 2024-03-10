import { useEffect, useState } from "react";
import useUserContext from "../../hooks/useUserContext";
import styled from "styled-components";

function SideBarItem({ id }) {
  console.log(`SideBarItem ${id} rendered!`);

  const { activeItem } = useUserContext();
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(activeItem.id === id ? true : false);
  if (activeItem.id === id) activeItem.ref.current = setIsActive;

  useEffect(() => {
    return () => console.log("SideBarItem unmounted!");
  }, []);

  const onMouseEnter = () => {
    if (activeItem.id !== id) setIsHover((prev) => !prev);
    // console.log("onMouseEnter");
  };
  const onMouseLeave = () => {
    if (activeItem.id !== id) setIsHover((prev) => !prev);
    // console.log("onMouseLeave");
  };
  const onClick = () => {
    activeItem.id = id;
    activeItem.ref.current((prev) => !prev);
    setIsActive((prev) => !prev);
    setIsHover((prev) => !prev);
  };

  return (
    <ItemBlock>
      {activeItem.id === id ? <ItemSelector $height={40} /> : null}
      {isHover ? <ItemSelector $height={20} /> : null}
      <Item $isActive={isActive || isHover} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={activeItem.id !== id ? onClick : undefined} />
    </ItemBlock>
  );
}

export default SideBarItem;

const ItemBlock = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin: 0 0 8px 0;
  justify-content: center;
`;
const Item = styled.div`
  width: 48px;
  min-height: 48px;
  border-radius: ${({ $isActive }) => ($isActive ? "33%" : "50%")};
  color: var(--text-normal);
  background-color: ${({ $isActive }) => ($isActive ? "var(--background-primary-blue)" : "var(--background-primary)")};
  transition: all 0.15s ease-out, color 0.15s ease-out;
  cursor: pointer;
`;
const ItemSelector = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: ${({ $height }) => $height + "px"};
  border-radius: 0 4px 4px 0;
  margin: ${({ $height }) => ($height === 40 ? "4px 0" : "14px 0")};
  background-color: var(--header-primary);
`;
