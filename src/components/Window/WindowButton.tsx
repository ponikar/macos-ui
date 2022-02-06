import React, { FC } from "react";
import styled, { StyledInterface } from "styled-components";

interface WindowButtonProps {
  bgColor: string;
  size?: number;
}
export const Circle: FC<WindowButtonProps> = ({ children, ...props }) => {
  return <WindowButton {...props}> {children} </WindowButton>;
};

const WindowButton = styled.button<WindowButtonProps>`
  height: ${(props) => (props.size ? props.size + "px" : "12px")};
  width: ${(props) => (props.size ? props.size + "px" : "12px")};
  border-radius: 100%;
  background-color: ${(props) => props.bgColor};
`;
