import styled from "styled-components";
import css from "styled-jsx/css";
import normalizeCss from "shared/normalize";
import React, { useState } from "react";
import { PathContext } from "context/AppContext";

function Layout(props: any) {
  const [path, setPath] = useState("");
  const value = { path, setPath };

  return (
    <PathContext.Provider value={value}>
      <AppLayout>
        {props.children}
        <style global jsx>
          {normalizeCss}
        </style>
      </AppLayout>
    </PathContext.Provider>
  );
}

export default Layout;

export const AppLayout = styled.div`
  max-height: 100vh;
  /* max-width: 1280px; */
  margin: auto;
`;
