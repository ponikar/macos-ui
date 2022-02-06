import { motion } from "framer-motion";
import React, { FC, RefObject } from "react";
import styled from "styled-components";
import { stopPropagation } from "../../utils/listeners";
import { Sidebar } from "./Sidebar";
import { WindowMain } from "./WindowMain";

interface WindowProps {
  ref?: RefObject<HTMLDivElement>;
}
export const Window: FC<WindowProps> = ({ ref }) => {
  console.log(ref?.current);
  return (
    <AnimatedWindowContainer
      dragConstraints={ref}
      dragMomentum={false}
      drag
      {...stopPropagation}
    >
      <Sidebar />
      <WindowMain />
    </AnimatedWindowContainer>
  );
};

const WindowContainer = styled.section`
  width: 50%;
  height: 400px;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
`;
const AnimatedWindowContainer = motion(WindowContainer);

export const WindowHeader = styled.header`
  height: 45px;
  display: flex;
  align-items: center;
`;
