import React from "react";
import styled from "styled-components";

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
  return (
    <Container>
      {BarData.map((app, index) => (
        <AppContaiener key={index}>
          <AppHint> {app.title} </AppHint>
          <AppImage
            style={{ width: "45px", height: "45px", objectFit: "cover" }}
            src={`/assets/imgs/bar/${app.src}`}
          />
        </AppContaiener>
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

const AppImage = styled.img`
  position: relative;
`;

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
