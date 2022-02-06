import React, { FC, forwardRef, Ref } from "react";
import styled from "styled-components";

export const Background: FC = forwardRef(({ children }, ref) => {
  return <BackgroundContainer ref={ref}>{children}</BackgroundContainer>;
});

const BackgroundContainer = styled.main`
  width: 100%;
  height: 100%;
  background-image: url("/assets/imgs/wallpaper.jpeg");
  background-size: cover;
  display: flex;
  flex-direction: column;
`;
