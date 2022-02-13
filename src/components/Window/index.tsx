import { motion, useDragControls } from "framer-motion";
import React, { FC, MutableRefObject, useCallback } from "react";
import styled from "styled-components";
import { stopPropagation } from "../../utils/listeners";
import { Sidebar } from "./Sidebar";
import { WindowMain } from "./WindowMain";

interface WindowProps {
  backgroundRef: MutableRefObject<HTMLDivElement | undefined>;
}
export const Window: FC<WindowProps> = ({ backgroundRef }) => {
  const controls = useDragControls();

  const onDragStart = useCallback((e, info) => {
    if (!e?.target?.classList.contains("drag-handle")) {
      // Stop the drag
      (controls as any).componentControls.forEach((entry) => {
        // be sure to pass along the event & info or it gets angry
        entry.stop(e, info);
      });
    }
  }, []);
  return (
    <AnimatedWindowContainer
      dragConstraints={backgroundRef}
      dragMomentum={false}
      dragElastic={0}
      dragControls={controls}
      onDragStart={onDragStart}
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
