import css from "styled-jsx/css";
import devices from "shared/media";
import colors from "shared/colors";

export default css.global`
  :root {
    font-size: 62.5%;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Red Hat Text", sans-serif;
    font-size: 2rem;
    color: "2E2D2D";
    background-color: ${colors.background};
  }

  h1,
  h2 {
    font-weight: 400;
  }

  h1 {
    font-size: 6.4rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-weight: 500;
    font-size: 2.2rem;
  }

  hr {
    border-top: 1px solid ${colors.darkGrey};
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: "Red Hat Display", sans-serif;
    margin-top: 0;
  }

  a {
    color: #2e2e2e;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  p,
  pre {
    margin-top: 0;
  }

  code {
    color: #0d47a1;
  }

  @media ${devices.mobileOnly} {
    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;
