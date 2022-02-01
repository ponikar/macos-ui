import React, { useEffect, useState, useCallback, FC, useRef } from "react";
import styled from "styled-components";

export const DesktopMenu: FC = () => {
  const [cords, setCords] = useState({ x: 0, y: 0 });
  const [mount, setMount] = useState(false);
  const currentItem = useRef(-1);
  const menuItems = useRef<ChildNode[]>([]);

  useEffect(() => {
    document.addEventListener("mouseup", calculateCordinates);
    document.addEventListener("keyup", accessibleKey);

    return () => {
      document.removeEventListener("mouseup", calculateCordinates);
      document.removeEventListener("keyup", () => {});
    };
  }, []);

  const accessibleKey = useCallback(
    (e: KeyboardEvent) => {
      const childNodes = menuItems.current;
      if (childNodes.length) {
        if (e.key === "ArrowDown") {
          currentItem.current += 1;
        } else if (e.key === "ArrowUp" && currentItem.current > 0) {
          currentItem.current -= 1;
        }

        if (currentItem.current >= childNodes.length) {
          currentItem.current = 0;
        }

        if (currentItem.current !== -1) {
          childNodes[currentItem.current].focus();
        }
      }
    },
    [menuItems.current]
  );

  const getButtons = (e: HTMLDivElement) => {
    if (e?.childNodes) {
      e.childNodes.forEach(
        (node) => node.localName === "button" && menuItems.current.push(node)
      );
    }
  };

  const calculateCordinates = useCallback((e) => {
    let x = e.pageX;
    let y = e.pageY - 20;
    if (window.innerWidth - 250 < e.pageX) {
      x = window.innerWidth - 250;
    }

    if (window.innerHeight - 150 < e.pageY) {
      y = window.innerHeight - 200;
    }

    setCords({ x, y });
    setMount(true);
  }, []);

  return mount ? (
    <MenuContainer
      ref={getButtons}
      style={{ "--x": `${cords.x}px`, "--y": `${cords.y}px` }}
    >
      <MenuItem> New Folder </MenuItem>
      <MenuDivider />
      <MenuItem> Get Info </MenuItem>
      <MenuItem> Changed Desktop Background... </MenuItem>
      <MenuDivider />
      <MenuItem> Use Stacks </MenuItem>
      <MenuItem> Group Stack By </MenuItem>
      <MenuItem> Show View Options </MenuItem>
    </MenuContainer>
  ) : null;
};

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
  z-index: 1;
`;

const MenuItem = styled.button`
  padding: 3px 20px;
  display: block;
  text-align: left;
  width: 100%;
  &:hover,
  &:focus {
    background-color: #0079fa;
    outline: none;
  }
  margin: 2px;
  border-radius: 5px;
  font-size: 13px;
  color: #fff;
  cursor: pointer;
`;

const MenuDivider = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  width: 92%;
  margin: 4px auto;
`;
