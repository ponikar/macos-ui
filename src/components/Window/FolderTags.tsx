import React, { FC } from "react";
import { FolderTagsData } from "../constants/FolderCollections";
import { AcccordingTitle, According, AccordingButton } from "./WindowAccording";
import { Circle } from "./WindowButton";

export const FolderTags: FC = () => {
  return (
    <According>
      <AcccordingTitle> Tags </AcccordingTitle>
      {FolderTagsData.map((tag, index) => (
        <AccordingButton key={index}>
          <Circle as="div" size={10} bgColor={tag.color} />
          {tag.title}
        </AccordingButton>
      ))}
    </According>
  );
};
