import React, { FC } from "react";
import styled from "styled-components";

export const Background: FC = ({ children }) => {
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

const BackgroundContainer = styled.main`
  width: 100%;
  height: 100%;
  background-image: url("/assets/imgs/wallpaper.jpeg");
  background-size: cover;
  display: flex;
  flex-direction: column;
`;
