import styled from "styled-components";
import css from "styled-jsx/css";
import normalizeCss from "shared/normalize";

{
  //* ALL FONTS
  /* font-family: 'Roboto', sans-serif;
font-family: 'Roboto Slab', serif;
font-family: 'Roboto Mono', monospace; */
}

function Layout(props: any) {
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
      <style global jsx>
        {normalizeCss}
      </style>
    </AppLayout>
  );
}

export default Layout;

export const AppLayout = styled.div`
  max-height: 100vh;
`;
