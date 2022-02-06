import React from "react";
import styled from "styled-components";
import { Colors } from "../../Theme/color";

export const WindowMain = () => {
  return (
    <MainContainer>
      <Header>
        <HeaderTitle>Red</HeaderTitle>
      </Header>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  flex: 1;
  background-color: ${Colors.window_background};
  border-radius: 0px 10px 10px 0px;
  user-select: none;
`;

const Header = styled.header`
  height: 45px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  background-color: ${Colors.window_header};
  padding: 0px 20px;
`;

const HeaderTitle = styled.h5`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
`;
