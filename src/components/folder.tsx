import styled from "styled-components";

export const Folder = () => {
  console.log("RENDERING");
  return (
    <FolderContainer onContextMenu={(e) => e.stopPropagation()}>
      <FolderImage src="/assets/imgs/folder.png" alt="" />
      <FolderName>Documents</FolderName>
    </FolderContainer>
  );
};

const FolderImage = styled.img`
  width: 85%;
`;

const FolderName = styled.p`
  font-size: 12px;
  color: #fff;
  position: relative;
  top: 0px;
  padding: 0px 10px;
  font-weight: 500;
  border-radius: 2.5px;
`;

const FolderContainer = styled.button`
  width: 75px;
  height: 75px;
  padding: 5px 2.5px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  align-items: center;

  &:focus ${FolderImage} {
    background-color: red;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(50px);
  }
  &:focus ${FolderName} {
    background-color: #dedede;
    color: #0e0e0e;
  }
`;
