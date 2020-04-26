import styled from "styled-components";
import pages from "api/data";
import TreeItemFolder from "./components/TreeItemFolder";
import { useContext } from "react";
import { PathContext } from "context/AppContext";
import Link from "next/link";
import TreeItemFile from "./components/TreeItemFile";
import { useRouter } from "next/router";

const SourceTreeCompact = () => {
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
            compact
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
                  compact
                  isOpen={slug === page.path ? true : false}
                  containFiles={true}
                />
              </a>
            </Link>
          );
        })}
      </IndentItems>
      <Link href={"/"}>
        <a>
          <IndexFileWrapper>
            <TreeItemFile name={"index"} type={"html"} compact isLowercase />
          </IndexFileWrapper>
        </a>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid lightgrey;
`;

const IndentItems = styled.div`
  margin-left: 0.5em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const IndexFileWrapper = styled.div`
  margin-left: 0.66em;
`;

export default SourceTreeCompact;
