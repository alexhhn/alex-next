import { Folder } from "@styled-icons/fa-regular/Folder";
import { FolderOpen } from "@styled-icons/fa-regular/FolderOpen";
import styled from "styled-components";
import { useContext } from "react";
import { PathContext } from "context/AppContext";
import TreeItemFiles from "./TreeItemFiles";
import { useRouter } from "next/router";

interface Props {
  name: string;
  path: string;
  isOpen: boolean;
  containFiles: boolean;
}

const TreeItem = ({ name, path, isOpen, containFiles }: Props) => {
  const { setPath } = useContext(PathContext);
  const isBold = isOpen && containFiles;
  const router = useRouter();

  const _renderContent = () => (
    <Wrapper onClick={() => setPath(path)}>
      <FolderRow>
        {isOpen ? <FolderOpen size={24} /> : <Folder size={24} />}
        <pre>{isBold ? <strong>{name}</strong> : name}</pre>
      </FolderRow>
      {isBold && <TreeItemFiles name={name} />}
    </Wrapper>
  );

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-bottom: 14px;

    &:last-child {
      margin-bottom: 8px;
    }

    pre {
      margin-left: 8px;
      font-size: 20px;
      text-transform: lowercase;
      margin-bottom: 10px;
    }
  `;

  const FolderRow = styled.div`
    display: flex;
  `;

  return _renderContent();
};

export default TreeItem;
