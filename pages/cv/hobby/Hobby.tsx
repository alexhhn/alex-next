import styled from 'styled-components';
import Halongbay from 'public/images/halongbay.png';
import Family from 'public/images/family.png';
import NTNUICal from 'public/images/ntnuical.png';
import Italy from 'public/images/italy.png';
import BackLeverWalk from 'public/videos/backleverwalk.mp4';
import Muscleups from 'public/videos/muscleups.mp4';
import Bouldering1 from 'public/videos/bouldering1.mp4';
import Bouldering2 from 'public/videos/bouldering2.mp4';
import Bouldering3 from 'public/videos/bouldering3.mp4';
import Brothers from 'public/images/brothers.png';
import Vietnam from 'public/images/vietnam.png';
import AlexTiger from 'public/images/alex-tiger.jpeg';
import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import devices from 'shared/media';
import Card from '@material-ui/core/Card';

const Hobby = () => {
	const router = useRouter();

	useEffect(() => {
		router.push('/cv?slug=hobbies', undefined, { shallow: true });
	}, []);

	return (
		<Wrapper>
			<h1>
				<pre>while(!coding)</pre>
			</h1>
			<p>
				A great work-life balance makes an efficient developer! Beside staring at my laptop all day, I do lot of
				other things, some of them are listed below:
			</p>
			<HobbyCard variant="outlined">
				<h3>Calisthenics (Street workout)</h3>
				<p>
					Calisthenics is about doing bodyweight exercises to achieve bodily fitness and grace of movement. I
					have been training with this sport for quite some time and absolutely love it.
				</p>
				<MediaContent>
					<VideoWrapper>
						<ReactPlayer width={'100%'} height={'100%'} controls url={BackLeverWalk} volum={0.2} />
					</VideoWrapper>
					<VideoWrapper width={'320px'} marginRight="6px">
						<ReactPlayer width={'100%'} height={'100%'} controls url={Muscleups} volum={0.2} />
					</VideoWrapper>
					<HobbyImage src={NTNUICal} />
				</MediaContent>
			</HobbyCard>
			<HobbyCard variant="outlined">
				<h3>Traveling</h3>
				<p>
					I am not good at taking breaks, except while I'm on a vacation. I love traveling oversea, preferbly
					somewhere warmer than Norway (probably everywhere else, hehe). Every year I aim to visit at least
					three new places, either alone or with some friends.
				</p>
				<MediaContent>
					<HobbyImage src={Italy} />
					<HobbyImage src={Halongbay} />
					<HobbyImage src={AlexTiger} />
				</MediaContent>
			</HobbyCard>
			<HobbyCard variant="outlined">
				<h3>Family & Friends</h3>
				<p>I enjoy being with my family and friends</p>
				<MediaContent>
					<HobbyImage src={Family} />
					<HobbyImage src={Brothers} />
					<HobbyImage src={Vietnam} />
				</MediaContent>
			</HobbyCard>
			<HobbyCard variant="outlined">
				<h3>Bouldering</h3>
				<p>Once in a while I would go bouldering (rock climbing) with some friends, mostly indoors.</p>
				<MediaContent>
					<VideoWrapper width={'220px'} height={'390px'}>
						<ReactPlayer width={'100%'} height={'100%'} controls url={Bouldering1} volum={0.2} />
					</VideoWrapper>
					<VideoWrapper width={'220px'} height={'390px'}>
						<ReactPlayer width={'100%'} height={'100%'} controls url={Bouldering2} volum={0.2} />
					</VideoWrapper>
					<VideoWrapper width={'320px'} height={'390px'}>
						<ReactPlayer width={'100%'} height={'100%'} controls url={Bouldering3} volum={0.2} />
					</VideoWrapper>
				</MediaContent>
			</HobbyCard>
		</Wrapper>
	);
};

const HobbyCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  margin-bottom: 18px;
  max-width: 1200px;

  &.MuiPaper-root {
    background-color: #fafafa;
  }

  h2 {
    margin: 0 0 8px;
  }  

  @media ${devices.mobileOnly} {
    padding: 18px;
    font-size: 16px;
  }
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	pre {
		margin: 0;
	}

	h1 {
		margin: 0.25em 0;
	}
`;

type VideoWrapperProps = {
	width?: string;
	height?: string;
	marginRight?: string;
};

const VideoWrapper =
	styled.div <
	VideoWrapperProps >
	`
  width: ${(props) => (props.width ? props.width : '400px')};
	height: ${(props) => (props.height ? props.height : '400px')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : '10px')};

  @media ${devices.laptopOnly} {
    width: 100%;
    height: initial;
    margin: 0;
	}
`;

const HobbyImage = styled.img`
	width: 300px;
	max-height: 400px;
	object-fit: contain;
	margin-right: 10px;

	@media ${devices.laptopOnly} {
		width: 100%;
		margin: 0 0 10px;
		max-height: initial;
	}
`;

const MediaContent = styled.div`
	display: flex;

	@media ${devices.laptopOnly} {
		flex-direction: column;
	}
`;

export default Hobby;
