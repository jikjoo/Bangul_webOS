import Button from '@jikjoo/moonstone/Button';
import React from 'react';
import { BoxMainBtn, BtnCheck, BtnConnect, BtnPush } from '../components/Main';
import { BoxPanel, BoxHeader } from '../components/Common';

// 함수형 component
const MainView = (props) => {
	return (
		<BoxPanel>
			<BoxMainBtn >
				<BtnPush push="kennel" >스마트 켄넬</BtnPush>
				<BtnPush push="home" >스마트 홈</BtnPush>
				<BtnPush push="location" >위치 정보</BtnPush>
			</BoxMainBtn>
			{/* <BtnConnect />
			<BtnCheck target="kennel" />
			<BtnCheck target="home" /> */}
		</BoxPanel>
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
