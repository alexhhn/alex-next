import styled from "styled-components";
import pages from "api/data";
import TreeItem from "./components/TreeItem";
import { useState } from "react";
import { useContext } from "react";
import { PathContext } from "context/AppContext";

const SourceTree = () => {
  const { path } = useContext(PathContext);
  console.log("path :", path);

  return (
    <Container>
      <TreeItem name={"src"} isOpen={true} containFiles={false} path="/" />
      <IndentItems>
        {pages.map((page, i) => (
          <TreeItem
            key={i}
            name={page.navigationTitle}
            path={page.path}
            isOpen={path === page.path ? true : false}
            containFiles={true}
          />
        ))}
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
