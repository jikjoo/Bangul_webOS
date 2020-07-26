import Button from '@enact/moonstone/Button';
import { Panel, Header } from '@enact/moonstone/Panels';
import React from 'react';
import BtnPush from '../components/Buttons/BtnPush';
import BtnConnect from '../components/Buttons/BtnConnect'
import StayTime from '../components/StayTIme';
// 함수형 component

const MainView = (props) => {
	return (
		<Panel>
			<Header title="차량용 스마트 펫케어: 방울이가 타고 있어요" />
			<BtnPush push="kennel" >스마트 켄넬</BtnPush>
			<BtnPush push="home" >스마트 홈</BtnPush>
			<BtnPush push="location" >위치 정보</BtnPush>
			<BtnConnect conn="server" />
			<BtnConnect conn="kenn" />
			<BtnConnect conn="home" />
			<StayTime/>
		</Panel>
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
