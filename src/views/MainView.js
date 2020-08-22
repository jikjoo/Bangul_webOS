import React from 'react';
import { BoxMainBtn, BtnGoto, Loading } from '../components/Main';
import { BoxPanel } from '../components/Box';

// 함수형 component
const MainView = () => {
	return (
		[<BoxPanel key={0}>
			<BoxMainBtn >
				<BtnGoto target="home" ></BtnGoto>
				<BtnGoto target="kennel" ></BtnGoto>
				<BtnGoto target="location" ></BtnGoto>
			</BoxMainBtn>
		</BoxPanel>,
		<Loading key={1} />
		]
	)
}

/* 
const MainView = kind({
	name: 'MainView',

	computed: {
		text: ({ next }) => `To ${next} Panel`
	},

	render: ({ ...rest }) => {
		delete rest.next;
		return (
			<Panel {...rest}>
				<Header title={"방울이"} />
				<Button onClick >스마트 홈</Button>
				<Button>스마트 켄넬</Button>
			</Panel>
		);
	}
}); */
export default MainView;
