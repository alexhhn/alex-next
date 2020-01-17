import styled from "styled-components";
import css from "styled-jsx/css";

{
  //* ALL FONTS
  /* font-family: 'Roboto', sans-serif;
font-family: 'Roboto Slab', serif;
font-family: 'Roboto Mono', monospace; */
}

function Layout(props) {
  console.log("%cHeiaeifhei",'color: lightblue; font-size: medium')
  return (
    <AppLayout>
      {/* <Grid>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
      </Grid> */}
      {/* <h1 className="example">Page header</h1> */}
      {props.children}
      <style global jsx>{normalize}</style>
    </AppLayout>
  );
}

export default Layout;

export const normalize = css.global`
  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-size: 21px;
    color: #2e2e2e;
  }

  h1, h2 {
    font-family: "Roboto Slab", serif;
    font-weight: 400;
  }

  h1 {
    font-size: 64px;
  }

  h2 {
    font-size: 48px;
  }

  h3 {
    font-weight: 500;
    font-size: 32px;
  }

`;

export const AppLayout = styled.div`
  max-height: 100vh;
`;

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
