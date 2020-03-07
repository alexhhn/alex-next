import Cardbox from "components/cardbox/Cardbox";
import { experienceData } from "api/data";

const Experience = () => {
  const { title } = experienceData;
  return (
    <div>
      <h1>{title}</h1>
      {/* <Cardbox></Cardbox>
    <Cardbox></Cardbox> */}
    </div>
  );
};

export default Experience;
