import styled from "styled-components";
import Card from "@material-ui/core/Card";
import devices from "shared/media";

const CardWrapper = styled(Card)`
  display: flex;
  font-size: 20px;
  flex-direction: column;
  padding: 40px;
  margin-bottom: 20px;

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

export const Header = styled.div`
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

export default CardWrapper;
