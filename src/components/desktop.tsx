import React, {
  FC,
  MouseEvent,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import { useActiveSelection } from "../hooks/useActiveSelection";
import { DesktopMenu } from "./Desktop/DesktopMenu";

export const Desktop: FC = ({ children }) => {
  const [showContext, setShowContext] = useState(false);
  const { events, selectionStyle } = useActiveSelection();
  const onRightClick: MouseEventHandler<HTMLElement> = useCallback((e) => {
    e.preventDefault();
    setShowContext(false);
    setShowContext(true);
  }, []);

  const hideContextMenu = useCallback(() => {
    setShowContext(false);
  }, [setShowContext]);

  useEffect(() => {
    document.addEventListener("blur", hideContextMenu);
    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "Escape":
          return hideContextMenu();
        case "ContextMenu":
          return setShowContext(true);
        default:
          return;
      }
    });

    return () => {
      document.removeEventListener("blur", hideContextMenu);
      document.removeEventListener("keyup", () => console.log("REMOVED"));
    };
  }, []);

  return (
    <Container
      onMouseDown={events.onMouseDown}
      onMouseUp={events.onMouseUp}
      onMouseMove={events.onMouseMove}
      onClick={hideContextMenu}
      onContextMenu={onRightClick}
    >
      <div style={selectionStyle} />
      {showContext && <DesktopMenu />}
      {children}
    </Container>
  );
};

const Container = styled.main`
  flex: 1;
  position: relative;
`;
