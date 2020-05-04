const projectsData: ExperienceData = {
	title: 'Projects',
	navigationTitle: 'Projects',
	path: 'projects',
	data: [
		{
			title: 'NAF',
			subTitle:
				'Norwegian Automobile Federation is a Norwegian association of car owners, established in 1924. The federation has 73 local chapters and more than 500,000 members.',
			imgSrc: 'naf-logo.png',
			jobTitle: 'Front-end developer',
			periode: '08.2019 - now',
			description:
				'I have the responsible for managing and developing new functionalities for multiple digital services within NAF. In addition I am also working on modernizing these projects using Nextjs and Sanity. This includes setting up a common front-end architecture that works across various service, and a design system to be used by any digital applications at NAF.',
			buzzwords: [
				'reactjs',
				'vuejs',
				'jquery',
				'razor',
				'javascript',
				'typescript',
				'nextjs',
				'sanity',
				'episerver',
				'designsystem',
				'auth0',
				'googleanalytics',
				'azure'
			]
		},
		{
			title: 'Intoit.io',
			subTitle:
				'Intoit.io is a crowdsourced EdTech-application with over 7.000 unique users. The goal of the service is to provide students an effective way to practice for the exams.',
			jobTitle: 'Developer, Mentor & Former CEO',
			imgSrc: 'intoit-logo.png',
			periode: '07.2018 - now',
			description:
				'In the first two years I had the responsible for leading the team, managing the project and ensuring staff liability. Since the project currently has a new team, I contribute with a mentor role - involve myself throughly in the process, help managing the project in addition to solve any challenging development tasks the team might meet.',
			buzzwords: [ 'reactjs', 'typescript', 'javascript', 'googleanalytics', 'postgresql', 'nodejs' ]
		},
		{
			title: 'Munchmuseet',
			jobTitle: 'Front-end developer',
			subTitle:
				"The municipality of Oslo is building a new museum in Bjørvika for the art collection of Edvard Munch. The new museum will be a signal building in Oslo that will house the municipality's fantastic Munch collection of nearly 28,000 works of art.",
			imgSrc: 'munch-logo.png',
			periode: '06.2019 - 11.2019',
			description:
				'Munchmuseet.no is being rebuilt as a CMS system using Episerver and React. I was involved in the project from the planning phase and was responsible for building the front-end codebase from scratch. The site had to sastify any advanced visual requirements such as various user interactions, animations, Universal Design friendly as well as being responsive on any browser and screen sizes.',
			buzzwords: [ 'reactjs', 'razor', 'episerver', 'javascript', 'azure' ]
		},
		{
			title: 'Dolly',
			subTitle:
				'Due to the new GPPR law in EU, NAV (Norwegian Labour and Welfare Administration) was in need for fictive testdata. Dolly - a web application for generating and managing these data was made in order to fullfill this necessity.',
			jobTitle: 'Front-end lead & UX developer',
			imgSrc: 'sheep.png',
			periode: '07.2018 - 05.2019',
			description:
				'Since Dolly is a complex interactive webapplication, there were several front-end developers working at the same time. After a couple of months working with the project, I became the front-end lead. I was responsible for training new team members, managing the development work and ensuring the code quality in the project. In addition I was also the ux developer working with designing the user interface.',
			buzzwords: [ 'reactjs', 'javascript', 'jenkin', 'sketch', 'ux' ]
		},
		{
			title: 'NOKNUT',
			subTitle:
				'NOKUT wants to incorporate a machine-learned chatbot into their digital service. NOKNUT - a POC project was created using Azure Bot Service to fullfill this necessity.',
			jobTitle: 'Scrum master & developer',
			imgSrc: 'noknut.png',
			periode: '08.2018 - 09.2018',
			description:
				'As a Scrum Master, I was responsible for daily standups, spring meetings and project delivery. Along with the team we implemented the solution using C # and Azure Bot Service. In addition, I created a front-end demo application with Reactjs.',
			buzzwords: [ 'reactjs', 'csharp', 'dotnet', 'azure' ]
		},
		{
			title: 'Dwarfheim',
			jobTitle: 'UX developer',
			subTitle:
				'Design, implementation and evaluation of a GUI system for Pineleafs flagship, an upcoming online multiplayer asymmetric strategy game.',
			imgSrc: 'dwarfheim.jpeg',
			periode: '01.2018 - 07.2018',
			description:
				'During the project, I have done a thorough research about user interface and user experience in strategy game development. Using various methods from user-centered design, I created a GUI solution to Dwarfheim where user-experience was the main focus',
			buzzwords: [ 'unity', 'ux', 'csharp', 'adobexd', 'indesign' ]
		},
		{
			title: 'Ace App',
			jobTitle: 'Front-end developer',
			subTitle:
				'In the fall of 2016, Ace Education launched a digital learning platform through the mobile application Ace. After a year, the application had a total of approx. 3000 users.',
			imgSrc: 'ace-logo.png',
			periode: '09.2015 - 09.2017',
			description: 'TBA',
			buzzwords: [ 'reactjs', 'reactnative', 'ux', 'sketch' ]
		},
		{
			title: 'Mobile Point of Sale',
			subTitle:
				'The project consisted of creating a Mobile Point of Sale (MPOS) solution that was intended to compete with iZettle.',
			jobTitle: 'Android developer',
			imgSrc: 'mpos.png',
			periode: '06.2015 - 09.2015',
			description: 'TBA',
			buzzwords: [ 'android', 'java', 'ux' ]
		},
		{
			title: 'PocketExam',
			subTitle:
				'Alexs team developed an native android application which helps IT-student to practice various subjects. The project was mentored and led by Applab (NTNU) ',
			jobTitle: 'Android developer',
			imgSrc: 'pocketexam.png',
			periode: '09.2014 - 08.2015',
			description: 'TBA',
			buzzwords: [ 'android', 'java', 'ux', 'indesign' ]
		}
	]
};

export const sideProjectsData: ExperienceData = {
	title: 'Hobby Projects',
	navigationTitle: 'Projects',
	path: 'projects',
	data: [
		{
			title: 'ITGK',
			subTitle: 'TBA',
			jobTitle: 'Developer',
			imgSrc: 'itgk.jpg',
			periode: '11.2013 - 01.2014',
			description: 'TBA',
			buzzwords: [ 'jquery', 'phonegap', 'xcode' ]
		},
		{
			title: 'MoviesRating',
			jobTitle: 'Developer',
			subTitle: 'TBA',
			imgSrc: 'movie.jpeg',
			periode: '04.2020',
			description: 'TBA',
			buzzwords: [ 'nextjs', 'reactjs', 'typescript', 'figma', 'zeitnow' ]
		},
		{
			title: 'AlexNext',
			subTitle: 'TBA',
			jobTitle: 'Developer',
			imgSrc: 'alex-forte.jpeg',
			periode: '01.2020 - now',
			description: 'TBA',
			buzzwords: [ 'nextjs', 'reactjs', 'typescript', 'figma', 'zeitnow' ]
		},
		{
			title: 'Munchies',
			subTitle: 'TBA',
			jobTitle: 'Developer',
			imgSrc: 'burger.png',
			periode: '04.2020 - now',
			description: 'TBA',
			buzzwords: [ 'reactjs', 'javascript', 'nodejs', 'restapi', 'mongodb', 'figma', 'zeitnow' ]
		}
	]
};

export default projectsData;
