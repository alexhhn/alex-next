import styled from "styled-components";
import { File } from "@styled-icons/boxicons-regular/File";
import { Css3 } from "@styled-icons/typicons/Css3";

interface Props {
  name: string;
  type: string;
  normalFontWeight?: boolean;
  isLowercase?: boolean;
  compact?: boolean;
}

const TreeItemFile = ({ name, type, isLowercase, compact }: Props) => {
  return (
    <Wrapper compact={compact} isLowercase={isLowercase ? isLowercase : false}>
      {type === "tsx" ? <File size={compact ? 18 : 24} /> : <Css3 size={compact ? 18 : 24} />}
      <pre>
        {name}.<span>{type}</span>
      </pre>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isLowercase: boolean, compact?: boolean }>`
  display: flex;
  margin-top: 5px;

  pre {
    ${props =>
    props.isLowercase
      ? `text-transform: :lowercase; font-weight: 400`
      : `  text-transform: :capitalize; font-weight: 600`};
    font-size: ${props => props.compact ? "14px" : "20px"};
    margin-left: 5px;
  }

  span {
    text-transform: lowercase;
  }
`;

export default TreeItemFile;
