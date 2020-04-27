import { useEffect } from "react";
import Cardbox from "components/cardbox/Cardbox";
import Cardlist from "components/cardlist/Cardlist";
import { experienceData } from "api/data";
import styled from "styled-components";
import colors from "shared/colors";
import { useRouter } from "next/router";

const Experience = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/cv?slug=experience", undefined, { shallow: true });
  }, []);

  const { data } = experienceData;
  return (
    <div>
      <h1>Experience</h1>
      <Cardlist>
        {data.map((element: Experience, i) => {
          return <Cardbox key={i} data={element} />;
        })}
      </Cardlist>
    </div>
  );
};

export default Experience;
