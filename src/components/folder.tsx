import styled from "styled-components";

export const Folder = () => {
  return (
    <FolderContainer>
      <FolderImage src="/assets/imgs/folder.png" alt="" />
      <FolderName>Documents</FolderName>
    </FolderContainer>
  );
};

const FolderContainer = styled.div`
  width: 75px;
  height: 75px;
  padding: 5px 2.5px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FolderImage = styled.img`
  width: 85%;
`;

const FolderName = styled.p`
  font-size: 12px;
  color: #fff;
  position: relative;
  top: 0px;
`;
