import styled from "styled-components";
import TreeItemFile from "./TreeItemFile";

interface Props {
  name: string;
  fromTopPage?: boolean;
}

export const TreeItemFiles = ({ name }: Props) => {
  return (
    <Wrapper>
      <TreeItemFile name={name} type={"tsx"} />
      <TreeItemFile name={name} type={"css"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 20px;
`;

export default TreeItemFiles;
