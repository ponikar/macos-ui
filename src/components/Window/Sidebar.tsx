import React from "react";
import styled from "styled-components";
import { WindowHeader } from ".";
import { Colors } from "../../Theme/color";
import { FavouritesFolder } from "./FavouritesFolder";
import { FolderTags } from "./FolderTags";
import { Circle } from "./WindowButton";

export const Sidebar = () => {
  return (
    <SideBar>
      <SideBarHeader>
        <Circle bgColor={Colors.window_red} />
        <Circle bgColor={Colors.window_yellow} />
        <Circle bgColor={Colors.window_green} />
      </SideBarHeader>
      <FavouritesFolder />
      <FolderTags />
    </SideBar>
  );
};

const SideBar = styled.div`
  min-width: 150px;
  flex-basis: 20%;
  background-color: rgba(50, 50, 50, 0.7);
  backdrop-filter: blur(10px);
`;

const SideBarHeader = styled.header`
  height: 45px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 15px;
`;
