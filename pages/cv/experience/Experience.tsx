import Cardbox from "components/cardbox/Cardbox";
import { experienceData } from "api/data";

const Experience = () => {
  const { data } = experienceData;
  return (
    <div>
      <h1>Experience</h1>
      {data.map((element: Experience, i) => {
        return <Cardbox key={i} data={element} />;
      })}

      <h2>Non-technology experiences</h2>
    </div>
  );
};

export default Experience;
