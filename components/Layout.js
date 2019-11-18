import styled from "styled-components";

function Layout(props) {
  return (
    <div className="page-layout">
      <Grid>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
      </Grid>
      <h1 className="example">Page header</h1>
      {props.children}
    </div>
  );
}

export default Layout;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px;

  @media all and (-ms-high-contrast: none) {
    & {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  font-size: 18px;
  font-weight: bold;

  @media all and (-ms-high-contrast: none) {
    & {
      min-width: 30%;
    }
  }
`;
