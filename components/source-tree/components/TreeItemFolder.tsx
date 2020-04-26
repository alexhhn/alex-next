import { Folder } from "@styled-icons/fa-regular/Folder";
import { FolderOpen } from "@styled-icons/fa-regular/FolderOpen";
import styled from "styled-components";
import { useContext } from "react";
import { PathContext } from "context/AppContext";
import TreeItemFile from "./TreeItemFile";

interface Props {
  name: string;
  path?: string;
  isOpen: boolean;
  containFiles: boolean;
  compact?: boolean;
}

const TreeItemFolder = ({
  name,
  // path,
  isOpen,
  containFiles,
  compact,
}: Props) => {
  console.log("compact :", compact);
  // const { setPath } = useContext(PathContext);
  const isBold = isOpen && containFiles;

  const _renderContent = () => (
    <Wrapper compact={compact}>
      <FolderRow>
        {isOpen ? (
          <FolderOpen size={compact ? 18 : 24} />
        ) : (
          <Folder size={compact ? 18 : 24} />
        )}
        <pre>{isBold ? <strong>{name}</strong> : name}</pre>
      </FolderRow>
      {isBold && (
        <Files>
          <TreeItemFile name={name} type={"tsx"} />
          <TreeItemFile name={name} type={"css"} />
        </Files>
      )}
    </Wrapper>
  );

  const Wrapper = styled.div<{ compact?: boolean }>`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-bottom: 14px;

    &:last-child {
      margin-bottom: 8px;
    }

    pre {
      margin-left: 8px;
      font-size: ${(props) => (props.compact ? "14px" : "20px")};
      text-transform: lowercase;
      margin-bottom: 10px;
      ${(props) => props.compact && `margin: 0 10px 0`}
    }

    span {
      font-size: 20px;
    }
  `;

  const FolderRow = styled.div`
    display: flex;
    &:hover {
      font-weight: bold;
    }
  `;

  const Files = styled.div`
    margin-left: 20px;
  `;

  return _renderContent();
};

export default TreeItemFolder;
