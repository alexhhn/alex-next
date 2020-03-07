import { Folder } from "@styled-icons/fa-regular/Folder";
import { FolderOpen } from "@styled-icons/fa-regular/FolderOpen";
import styled from "styled-components";
import { useContext } from "react";
import { LanguageContext } from "context/AppContext";

interface Props {
  name: string;
  path: string;
}

const TreeItem = ({ name, path }: Props) => {
  const { setPath } = useContext(LanguageContext);

  return (
    <Wrapper onClick={() => setPath(path)}>
      <Folder size={20} />
      {/* <FolderOpen size={20} /> */}
      <pre>{name}</pre>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 10px;

  pre {
    margin-left: 8px;
  }
`;

export default TreeItem;
