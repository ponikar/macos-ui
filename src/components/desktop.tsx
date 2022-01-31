import React, {
  FC,
  MouseEvent,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";

export const Desktop: FC = ({ children }) => {
  const [showContext, setShowContext] = useState(false);
  const onRightClick: MouseEventHandler<HTMLElement> = useCallback((e) => {
    e.preventDefault();
    setShowContext(false);
    setShowContext(true);
  }, []);
  return (
    <Container
      onBlur={(e) => setShowContext(false)}
      onClick={(e) => setShowContext(false)}
      onContextMenu={onRightClick}
    >
      {showContext && <ContextMenu />}
      {children}
    </Container>
  );
};

const ContextMenu: FC = () => {
  const [cords, setCords] = useState({ x: 0, y: 0 });
  const [mount, setMount] = useState(false);
  useEffect(() => {
    document.addEventListener("mouseup", (e) => {
      setCords({ x: e.pageX, y: e.pageY - 15 });
      setMount(true);
    });

    return () => {
      document.removeEventListener("mouseup", () => {});
    };
  }, []);

  return (
    mount && (
      <MenuContainer style={{ "--x": `${cords.x}px`, "--y": `${cords.y}px` }}>
        <MenuItem> New Folder </MenuItem>
        <MenuDivider />
        <MenuItem> Get Info </MenuItem>
        <MenuItem> Changed Desktop Background... </MenuItem>
        <MenuDivider />
        <MenuItem> Use Stacks </MenuItem>
        <MenuItem> Group Stack By </MenuItem>
        <MenuItem> Show View Options </MenuItem>
      </MenuContainer>
    )
  );
};

const Container = styled.main`
  flex: 1;
  position: relative;
`;

const MenuContainer = styled.div`
  width: 250px;
  height: auto;
  background-color: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: absolute;
  border-radius: 5px;
  padding: 1px 0px;
  transform: translate(var(--x), var(--y));
  backdrop-filter: blur(20px);
`;

const MenuItem = styled.div`
  padding: 3px 20px;

  &:hover,
  &:focus {
    background-color: #0079fa;
  }
  margin: 2px;
  border-radius: 5px;
  font-size: 13px;
  color: #fff;
  cursor: pointer;
`;

const MenuDivider = styled.hr`
  border-top: 1px solid rgba(255, 255, 255, 0);
  width: 92%;
  margin: 4px auto;
`;
