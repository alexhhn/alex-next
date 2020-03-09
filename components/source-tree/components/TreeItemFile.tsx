import styled from "styled-components";
import { File } from "@styled-icons/boxicons-regular/File";
import { Css3 } from "@styled-icons/typicons/Css3";

interface Props {
  name: string;
  type: string;
  normalFontWeight?: boolean;
  isLowercase?: boolean;
}

const TreeItemFile = ({ name, type, isBold, isLowercase }: Props) => {
  return (
    <Wrapper isLowercase={isLowercase ? isLowercase : false}>
      {type === "tsx" ? <File size={24} /> : <Css3 size={24} />}
      <pre>
        {name}.<span>{type}</span>
      </pre>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isLowercase: boolean }>`
  display: flex;
  margin-top: 5px;

  pre {
    ${props =>
      props.isLowercase
        ? `text-transform: :lowercase; font-weight: 400`
        : `  text-transform: :capitalize; font-weight: 600`};
    font-size: 20px;
    margin-left: 5px;
  }

  span {
    text-transform: lowercase;
  }
`;

export default TreeItemFile;
