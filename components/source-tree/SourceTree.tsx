import styled from "styled-components";
import pages from "api/data";
import TreeItem from "./components/TreeItem";

const SourceTree = () => (
  <Container>
    {pages.map((page, i) => (
      <TreeItem key={i} name={page.navigationTitle} path={page.path} />
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 18px;
  }
`;

export default SourceTree;
