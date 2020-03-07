import Card from "@material-ui/core/Card";
import styled from "styled-components";
import ForteLogo from "public/images/forte-logo.png";
import devices from "shared/media";

interface Props {
  key: number;
  data: Experience;
}

const Cardbox = ({ data }: Props) => {
  const { title, description, jobTitle, imgSrc, buzzwords, periode } = data;
  return (
    <Wrapper variant="outlined">
      <Header>
        <div>
          <img src={`images/${imgSrc}`} />
          <h2>{title}</h2>
        </div>
        <p>{periode}</p>
      </Header>
      <h3>{jobTitle}</h3>
      <p>{description}</p>
      <code>
        {buzzwords.map((word, i) => (
          <span key={i}>#{word} </span>
        ))}
      </code>
    </Wrapper>
  );
};

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
