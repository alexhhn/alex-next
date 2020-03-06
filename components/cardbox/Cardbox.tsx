import Card from "@material-ui/core/Card";
import styled from "styled-components";
import ForteLogo from "public/images/forte-logo.png";
import devices from "shared/media";

const Cardbox = () => (
  <div>
    <Wrapper variant="outlined">
      <Header>
        <div>
          <img src={ForteLogo} />
          <h2>Forte Digital</h2>
        </div>
        <p>06.2019 - now</p>
      </Header>
      <h3>Front-end consultant</h3>
      <p>
        Forte_ er et konsulentselskap med kompetanse innen leveranseledelse,
        rådgivning og konseptutvikling, UX/design, utvikling og kontinuerlig
        forbedring av løsninger i drift. Som IT konsulent hos Forte_ jobber jeg
        med spennende prosjekter ved hjelp av moderne front-end teknologi.
      </p>
      <pre>#consulting #frontend #sanity #cms</pre>
    </Wrapper>
  </div>
);

const Wrapper = styled(Card)`
  display: flex;
  font-size: 20px;
  flex-direction: column;
  padding: 40px;

  &.MuiPaper-root {
    background-color: #fafafa;
  }

  img {
    width: 40px;
    object-fit: contain;
    margin-right: 12px;
  }

  h3 {
    margin-bottom: 20px;
  }

  @media ${devices.mobileOnly} {
    padding: 18px;
    font-size: 16px;

    h3 {
      margin-bottom: 10px;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }

  h2,
  p {
    margin: 0;
  }

  p {
    font-style: italic;
    font-size: 16px;
  }
`;

export default Cardbox;
