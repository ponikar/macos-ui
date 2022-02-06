import React from "react";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { WindowMain } from "./WindowMain";

export const Window = () => {
  return (
    <WindowContainer>
      <Sidebar />
      <WindowMain />
    </WindowContainer>
  );
};

const WindowContainer = styled.section`
  width: 50%;
  height: 400px;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
`;

export const WindowHeader = styled.header`
  height: 45px;
  display: flex;
  align-items: center;
`;
