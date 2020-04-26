import { Folder } from "@styled-icons/fa-regular/Folder";
import { FolderOpen } from "@styled-icons/fa-regular/FolderOpen";
import styled from "styled-components";
import { useContext } from "react";
import { PathContext } from "context/AppContext";
import TreeItemFile from "./TreeItemFile";
import devices from "shared/media";

interface Props {
  name: string;
  isLowercase?: boolean;
  isOpen: boolean;
  path?: string;
  containFiles: boolean;
  compact?: boolean;
}

const TreeItemFolder = ({
  name,
  isLowercase,
  isOpen,
  containFiles,
  compact,
}: Props) => {
  console.log("compact :", compact);
  // const { setPath } = useContext(PathContext);
  const isBold = isOpen && containFiles;

  return (
    <Wrapper compact={compact}>
      <FolderRow>
        {isOpen ? (
          <TreeItemFile
            isLowercase={isLowercase}
            name={name}
            type={"folder-opened"}
            compact={compact}
            hideType
            isBold
          />
        ) : (
          <TreeItemFile
            isLowercase={isLowercase}
            name={name}
            type={"folder"}
            compact={compact}
            hideType
          />
        )}
      </FolderRow>

      {isBold && (
        <Files>
          <TreeItemFile name={name} type={"html"} compact={compact} isBold />
          <TreeItemFile name={name} type={"css"} compact={compact} isBold />
        </Files>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ compact?: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 12px;

  @media ${devices.mobileOnly} {
    margin: 0 0.25em 0.25em;
  }
`;

const FolderRow = styled.div`
  display: flex;
  align-items: center;
  text-transform: lowercase;

  &:hover {
    font-weight: bold;
  }
`;

const Files = styled.div`
  margin: 5px 0 0 20px;

  @media ${devices.mobileOnly} {
    margin: 5px 0 0 0.5em;
  }
`;
export default TreeItemFolder;
