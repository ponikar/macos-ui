import React, { useState } from "react";
import { CSSProperties } from "styled-components";

export const useActiveSelection = () => {
  const [isActive, setIsActive] = useState(false);
  const [beginCord, setBeginCords] = useState({ x: 0, y: 0 });
  const [styles, setStyles] = useState<CSSProperties>({});

  const updateStyles = (newStyles: CSSProperties) => {
    setStyles((oldStyles) => ({ ...oldStyles, ...newStyles }));
  };
  const onMouseDown: React.MouseEventHandler<HTMLElement> = (e) => {
    setIsActive(true);
    setBeginCords({ x: e.pageX, y: e.pageY });
    updateStyles({ transform: `translate(${e.pageX}px, ${e.pageY}px)` });
  };
  const onMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    if (isActive) {
      const { x, y } = beginCord;
      const diffX = (e.clientX - x) * 0.5;
      const diffY = (e.clientY - y) * 0.5 - 10;
      updateStyles({
        transform: `translate(${x}px, ${y}px) scale(${diffX}, ${diffY})`,
      });
    }
  };
  const onMouseUp: React.MouseEventHandler<HTMLElement> = (e) => {
    setIsActive(false);
    setStyles({});
  };

  return {
    events: { onMouseDown, onMouseUp, onMouseMove },
    selectionStyle: { ...styles, ...defaultSelectionStyle },
  };
};

const defaultSelectionStyle: CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.4)",
  position: "absolute",
  float: "right",
  transformOrigin: "top left",
};
