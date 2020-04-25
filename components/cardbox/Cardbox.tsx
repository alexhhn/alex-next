import Card from "@material-ui/core/Card";
import styled from "styled-components";
import devices from "shared/media";

interface Props {
  key: number;
  data: Experience;
}

const Cardbox = ({ data }: Props) => {
  const {
    title,
    description,
    jobTitle,
    imgSrc,
    buzzwords,
    periode,
    subTitle,
  } = data;
  return (
    <Wrapper variant="outlined">
      <TopArea>
        <Header>
          <div>
            <img src={`images/${imgSrc}`} />
            <h2>{title}</h2>
          </div>
          <p>{periode}</p>
        </Header>
        <SubTitle>{subTitle}</SubTitle>
      </TopArea>
      <div>
        <h3>{jobTitle}</h3>
        <p>{description}</p>
      </div>
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
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
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
    margin: 20px 0 10px;
  }

  @media ${devices.mobileOnly} {
    padding: 18px;
    font-size: 16px;
  }
`;

const TopArea = styled.div`
  h2,
  p {
    margin: 0;
  }

  p {
    font-size: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8em;

  div {
    display: flex;
    align-items: center;
  }
`;

const SubTitle = styled.p`
  font-style: italic;
  margin: 0;
`;

export default Cardbox;
