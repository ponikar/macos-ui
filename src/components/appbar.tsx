import React from "react";
import styled from "styled-components";

const BarData = [
  {
    src: "finder.svg",
  },
  {
    src: "contacts.svg",
  },
  {
    src: "notes.svg",
  },
  {
    src: "mail.svg",
  },
  {
    src: "facetime.svg",
  },
  {
    src: "photo.svg",
  },
  {
    src: "map.svg",
  },
  {
    src: "findmyiphone.svg",
  },
  {
    src: "podcast.svg",
  },
  {
    src: "stock.svg",
  },
  {
    src: "music.svg",
  },
  {
    src: "settings.svg",
  },
];

export const AppBar = () => {
  return (
    <Container>
      {BarData.map((app, index) => (
        <img
          key={index}
          style={{ width: "45px", height: "45px", objectFit: "cover" }}
          src={`/assets/imgs/bar/${app.src}`}
        />
      ))}
    </Container>
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
