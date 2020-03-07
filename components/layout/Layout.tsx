import styled from "styled-components";
import css from "styled-jsx/css";
import normalizeCss from "shared/normalize";
import React, { useState } from "react";
import { LanguageContext } from "context/AppContext";

function Layout(props: any) {
  const [path, setPath] = useState("");
  const value = { path, setPath };

  return (
    <LanguageContext.Provider value={value}>
      <AppLayout>
        {props.children}
        <style global jsx>
          {normalizeCss}
        </style>
      </AppLayout>
    </LanguageContext.Provider>
  );
}

export default Layout;

export const AppLayout = styled.div`
  max-height: 100vh;
  /* max-width: 1280px; */
  margin: auto;
`;
