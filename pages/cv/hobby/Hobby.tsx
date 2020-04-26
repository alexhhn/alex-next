import styled from "styled-components";
import Halongbay from "public/images/halongbay.png";
import BackLeverWalk from "public/videos/backleverwalk.mp4";
import Muscleups from "public/videos/muscleups.mp4";
import AlexPool from "public/images/alex-pool.png";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Hobby = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/cv?slug=hobbies", undefined, { shallow: true });
  }, []);

  return (
    <Wrapper>
      <h1>
        <pre>while(!coding)</pre>
      </h1>
      <p>
        A great work-life balance makes a efficient developer! Beside staring at
        my laptop all day, I lot of random stuffs, some of them are listed below
        (excuse my language in some of the videos *emoji*):
      </p>

      <HobbyView>
        <h3>Calisthenics (Street workout)</h3>
        <p>
          Calisthenics is about doing bodyweight exercises to achieve bodily
          fitness and grace of movement. I have been training with this sport
          for quite some time and absolutely love it.
        </p>
        <MediaContent>
          <ReactPlayer
            width={400}
            height={400}
            controls
            url={BackLeverWalk}
            volum={0.2}
            style={{ marginRight: 20 }}
          />
          <ReactPlayer
            width={320}
            height={400}
            controls
            url={Muscleups}
            volum={0.2}
          />
        </MediaContent>
      </HobbyView>

      {/* <HobbyView>
      <h3>Amateur Billiards</h3>
      <HobbyImage src={AlexPool} />
      <p>
        Mostly 8-balls, at a bar with some friends. Preferably with a 🍺 (or
        🍺🍺)
      </p>
    </HobbyView> */}

      <HobbyView>
        <h3>Traveling</h3>
        <p>
          I am not good at taking breaks, except while traveling - I would do
          nothing else than chilling. I am not the best at saving money, mostly
          because I travel whenever I have the chance. Honestly, I have no
          regrets :)
        </p>
        <HobbyImage src={Halongbay} />
      </HobbyView>
      <HobbyView>
        <h3>Friends & family</h3>
        <p>
          Beside other stuff aboves, I use the rest of my time to be with my
          friends and family.
        </p>
        <HobbyImage src={Halongbay} />
      </HobbyView>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  pre {
    margin: 0;
  }

  h1 {
    margin-bottom: 0.25em;
  }
`;

const HobbyView = styled.div`
  margin: 10px 0 20px;
  max-width: 840px;
  p {
    margin-top: 10px;
  }
`;

const HobbyImage = styled.img`
  width: 300px;
  object-fit: contain;
`;

const MediaContent = styled.div`
  display: flex;
`;
export default Hobby;
