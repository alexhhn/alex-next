import { Folder } from "@styled-icons/fa-regular/Folder";
import { FolderOpen } from "@styled-icons/fa-regular/FolderOpen";
import styled from "styled-components";
import { useContext } from "react";
import { PathContext } from "context/AppContext";
import { File } from "@styled-icons/boxicons-regular/File";
import { Css3 } from "@styled-icons/typicons/Css3";

interface Props {
  name: string;
  path: string;
  isOpen: boolean;
  containFiles: boolean;
}

const TreeItem = ({ name, path, isOpen, containFiles }: Props) => {
  const { setPath } = useContext(PathContext);

  const isBold = isOpen && containFiles;

  return (
    <Wrapper onClick={() => setPath(path)}>
      <FileRow>
        {isOpen ? <FolderOpen size={24} /> : <Folder size={24} />}
        <pre>{isBold ? <strong>{name}</strong> : name}</pre>
      </FileRow>
      {isBold && (
        <Files>
          <FileRow>
            <File size={24} />
            <pre>
              <strong>
                {name}.<span>tsx</span>
              </strong>
            </pre>
          </FileRow>
          <FileRow>
            <Css3 size={24} />
            <pre>
              <strong>
                {name}.<span>css</span>
              </strong>
            </pre>
          </FileRow>
        </Files>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 10px;

  pre {
    margin-left: 8px;
    font-size: 20px;
    text-transform: lowercase;
  }
`;

const FileRow = styled.div`
  display: flex;
`;

const Files = styled.div`
  margin-left: 20px;
  pre {
    text-transform: capitalize;
  }

  span {
    text-transform: lowercase;
  }
`;

export default TreeItem;
