import styled from "styled-components";
import pages from "api/data";
import TreeItemFolder from "./components/TreeItemFolder";
import { useContext } from "react";
import { PathContext } from "context/AppContext";
import Link from "next/link";
import TreeItemFile from "./components/TreeItemFile";

interface Props {
  fromTopPage?: boolean;
}

const SourceTree = ({ fromTopPage }: Props) => {
  const { path } = useContext(PathContext);

  return (
    <Container>
      <TreeItemFolder name={"src"} isOpen={true} containFiles={false} path="/" />
      <IndentItems>
        {pages.map((page, i) => {
          if (fromTopPage) {
            return (
              <Link key={i} href={`/cv?slug=${path}`}>
                <a>
                  <TreeItemFolder
                    key={i}
                    name={page.navigationTitle}
                    path={page.path}
                    isOpen={false}
                    containFiles={false}
                  />
                </a>
              </Link>
            );
          } else {
            return (
              <a key={i}>
                <TreeItemFolder
                  name={page.navigationTitle}
                  path={page.path}
                  isOpen={path === page.path ? true : false}
                  containFiles={true}
                />
              </a>
            );
          }
        })}
        <Link href={"/"}>
          <a>
            <TreeItemFile name={"index"} type={"tsx"} isLowercase={true} />
          </a>
        </Link>
      </IndentItems>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const IndentItems = styled.div`
  margin-left: 20px;
`;

export default SourceTree;