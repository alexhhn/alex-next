import InstagramEmbed from "react-instagram-embed";
import styled from "styled-components";

const Hobby = () => (
  <Wrapper>
    <h1><pre>while(!coding)</pre></h1>
    <p>A great work-life balance makes a efficient developer! Beside staring at my laptop, I do: </p>

    <h3>Amateur Billiards</h3>
    <p>Mostly 8-balls, at a bar with some friends. Preferably with a 🍺 (or 🍺🍺)</p>

    <IGView>


      <InstagramEmbed
        url="https://instagr.am/p/B7EAwJvg0kN/"
        maxWidth={320}
        hideCaption={true}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      />

      <InstagramEmbed
        url="https://instagr.am/p/BgTOqQeAwTS/"
        maxWidth={320}
        hideCaption={true}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      />

      <InstagramEmbed
        url="https://instagr.am/p/Bbo5TbTF9MK/"
        maxWidth={320}
        hideCaption={true}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      />

      <InstagramEmbed
        url="https://instagr.am/p/B7EAwJvg0kN/"
        maxWidth={320}
        hideCaption={true}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      />

      <InstagramEmbed
        url="https://instagr.am/p/BgTOqQeAwTS/"
        maxWidth={320}
        hideCaption={true}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      />

      <InstagramEmbed
        url="https://instagr.am/p/Bbo5TbTF9MK/"
        maxWidth={320}
        hideCaption={true}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      />
    </IGView>

  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  pre {
    margin: 0;
  }
`

const IGView = styled.div`

  max-width: 100%;
  column-count: 3;
  column-gap: 1em;

  iframe {
    /* background-color: #eee; */
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
    
  }
`;

const HobbyView = styled.div`
  display: flex;
  /* grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr; */
  /* iframe {
    float:right;
    width: 65%;
  } */
`

export default Hobby;
