import React, { FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { interpolate } from "../../utils/interpolate";

const AppHint = styled.div`
  position: absolute;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(50px);
  color: #fff;
  top: -40px;
  font-size: 12px;
  display: none;
  width: max-content;
  left: 50%;
  transform: translateX(-50%);

  &::before {
    content: url("/assets/imgs/bar/arrow.svg");
    position: absolute;
    top: 22px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const AppContaiener = styled.button`
  position: relative;
  &:hover ${AppHint} {
    display: block;
  }
`;

const AppImage = styled.img`
  position: relative;
`;

const AnimatedAppContainer = motion(AppContaiener);

interface DockProps {
  app: { src: string; title: string };
  index: number;
  hoverOffset: number;

  containerWidth: number;
}

export const DockApp: FC<DockProps> = ({
  app,
  index,
  hoverOffset,
  containerWidth,
}) => {
  const [width, setWidth] = useState<number>(0);
  const [scale, setScale] = useState(1);
  const current = (width * (index + 1)) / containerWidth;
  const prev = (width * index) / containerWidth;

  useEffect(() => {
    const calculateScale = interpolate({
      interpolateValue: hoverOffset,
      inputRange: [prev, current],
    });
    if (!Number.isNaN(calculateScale)) {
      setScale(calculateScale);
    }
  }, [hoverOffset]);

  console.log("SCALE", scale);

  return (
    <AnimatedAppContainer
      ref={(ref) => ref && setWidth(ref?.clientWidth)}
      // onHoverStart={(e) => setHoverIndex(index)}
      // onHoverEnd={(e) => setHoverIndex(-1)}
      // whileHover={{
      //   scale: 1.8,
      //   paddingBottom: "25px",
      //   paddingLeft: "25px",
      //   paddingRight: "25px",
      // }}
      animate={{ scale }}
      transition={{ duration: 0.025 }}
    >
      <AppHint> {app.title} </AppHint>
      <AppImage
        style={{ width: "45px", height: "45px", objectFit: "cover" }}
        src={`/assets/imgs/bar/${app.src}`}
      />
    </AnimatedAppContainer>
  );
};
