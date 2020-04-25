import Cardbox from "components/cardbox/Cardbox";
import { experienceData } from "api/data";
import styled from "styled-components";
import colors from "shared/colors";

const Experience = () => {
  const { data } = experienceData;
  return (
    <div>
      <h1>Experience</h1>
      <CardList>
        {data.map((element: Experience, i) => {
          return <Cardbox key={i} data={element} />;
        })}
      </CardList>
    </div>
  );
};

const CardList = styled.div`
  display: grid;
  /* Should be responsive,3,2,1 grid */
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  /* border-right: 1px solid ${colors.grey}; */

`
export default Experience;
