import styled from "styled-components";
import { File } from "@styled-icons/boxicons-regular/File";
import { Html5 } from "@styled-icons/fa-brands/Html5";
import { Css3 } from "@styled-icons/typicons/Css3";
import { Folder } from "@styled-icons/fa-regular/Folder";
import { FolderOpen } from "@styled-icons/fa-regular/FolderOpen";
import devices from "shared/media";

interface Props {
  name: string;
  type: string;
  normalFontWeight?: boolean;
  isLowercase?: boolean;
  compact?: boolean;
  isBold?: boolean;
  hideType?: boolean;
}

const TreeItemFile = ({
  name,
  type,
  isLowercase,
  compact,
  isBold,
  hideType,
}: Props) => {
  console.log("isLowercase :", isLowercase);
  return (
    <Wrapper
      compact={compact}
      isLowercase={isLowercase ? true : false}
      isBold={isBold}
    >
      {RenderRowByType(type, compact)}
      <pre>
        {name}
        {!hideType && <span>.{type}</span>}
      </pre>
    </Wrapper>
  );
};

const RenderRowByType = (type: string, compact?: boolean) => {
  switch (type) {
    //TODO: This should be a constant file
    case "folder":
      return <Folder size={compact ? 20 : 26} />;
    case "folder-opened":
      return <FolderOpen size={compact ? 20 : 26} />;
    case "html":
      return <Html5 size={compact ? 20 : 26} />;
    case "css":
      return <Css3 size={compact ? 20 : 26} />;
    default:
      return <Css3 size={compact ? 20 : 26} />;
  }
};

const Wrapper = styled.div<{
  isLowercase: boolean;
  compact?: boolean;
  isBold?: boolean;
}>`
  display: flex;
  align-items: center;
  margin-top: 8px;

  @media ${devices.mobileOnly} {
    margin-top: 0.25em;
  }

  pre {
    ${(props) =>
      props.isLowercase
        ? `text-transform: lowercase; font-weight: 400;`
        : `text-transform: capitalize; font-weight: 400;`};
    font-size: ${(props) => (props.compact ? "15px" : "20px")};
    ${(props) => props.isBold && `font-weight: bold;`};
    margin: 2px 0 0 8px;
    @media ${devices.mobileOnly} {
      margin: 2px 0 0 0.5em;
    }
  }

  pre:hover {
    font-weight: bold;
  }

  span {
    font-size: ${(props) => (props.compact ? "14px" : "20px")};
    text-transform: lowercase;
  }
`;

export default TreeItemFile;
