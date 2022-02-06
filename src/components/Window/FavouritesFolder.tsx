import React from "react";
import styled from "styled-components";
import { FavoritesData } from "../constants/FolderCollections";
import { AcccordingTitle, According, AccordingButton } from "./WindowAccording";

export const FavouritesFolder = () => {
  return (
    <According>
      <AcccordingTitle>Favorites</AcccordingTitle>
      {FavoritesData.map((fav, i) => (
        <AccordingButton key={i}>
          <IconImage src={`/assets/icons/windows/${fav.src}`} />
          {fav.title}
        </AccordingButton>
      ))}
    </According>
  );
};

const IconImage = styled.img`
  width: 15px;
  height: 15px;
  object-fit: contain;
`;
