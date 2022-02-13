import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Folder } from "../folder";

export const WindowContainArea = () => {
  return (
    <ContainArea>
      <Folder />
      <Folder />
      <Folder />
      <Folder />
    </ContainArea>
  );
};

const ContainArea = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
`;
