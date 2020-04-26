import styled from "styled-components";
import pages from "api/data";
import TreeItemFolder from "./components/TreeItemFolder";
import { useContext } from "react";
import { PathContext } from "context/AppContext";
import Link from "next/link";
import TreeItemFile from "./components/TreeItemFile";
import { useRouter } from "next/router";

const SourceTree = () => {
  // const { path } = useContext(PathContext);
  // console.log("path :", path);
  const router = useRouter();

  const { slug } = router.query;

  return (
    <Container>
      <Link href={"/"}>
        <a>
          <TreeItemFolder
            name={"src"}
            isOpen={true}
            containFiles={false}
            path="/"
            isLowercase
          />
        </a>
      </Link>
      <IndentItems>
        {pages.map((page, i) => {
          return (
            <Link key={i} href={`/cv?slug=${page.path}`}>
              <a key={i}>
                <TreeItemFolder
                  name={page.navigationTitle}
                  // path={page.path}
                  isOpen={slug === page.path ? true : false}
                  containFiles={true}
                />
              </a>
            </Link>
          );
        })}
        <Link href={"/"}>
          <a>
            <IndexFileWrapper>
              <TreeItemFile
                name={"index"}
                type={"html"}
                isLowercase
                // TODO: Need to reengineer path
                isBold={!slug}
              />
            </IndexFileWrapper>
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

const IndexFileWrapper = styled.div`
  margin-top: 0.8em;
`;

export default SourceTree;
