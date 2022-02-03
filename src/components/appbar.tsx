import React, { MouseEventHandler, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DockApp } from "./Dock/DockApp";
const BarData = [
  {
    src: "finder.svg",
    title: "Finder",
  },
  {
    src: "contacts.svg",
    title: "Contacts",
  },
  {
    src: "notes.svg",
    title: "Notes",
  },
  {
    src: "mail.svg",
    title: "Mail",
  },
  {
    src: "facetime.svg",
    title: "FaceTime",
  },
  {
    src: "photo.svg",
    title: "Photos",
  },
  {
    src: "map.svg",
    title: "Map",
  },
  {
    src: "findmyiphone.svg",
    title: "Find my Device",
  },
  {
    src: "podcast.svg",
    title: "Podcast",
  },
  {
    src: "stock.svg",
    title: "Stocks",
  },
  {
    src: "music.svg",
    title: "Music",
  },
  {
    src: "settings.svg",
    title: "System Preferences",
  },
];

export const AppBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverOffset, setHoverOffset] = useState(0);
  const onMouseMove: MouseEventHandler = (e) => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const screenWidth = window.innerWidth;
      const offset = e.pageX - (screenWidth - containerWidth) / 2;

      setHoverOffset(((offset * 100) / containerWidth) * 0.01);
    }
  };

  return (
    <AnimatedContainer ref={containerRef} onMouseMove={onMouseMove}>
      {BarData.map((app, index) => (
        <DockApp
          index={index}
          hoverOffset={hoverOffset}
          app={app}
          key={index}
        />
      ))}
    </AnimatedContainer>
  );
};

const Container = styled.div`
  display: flex;
  width: auto;
  height: 55px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  align-items: center;
  padding: 0px 4px;
  gap: 6px;
`;

const AnimatedContainer = motion(Container);
