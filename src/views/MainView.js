import Button from '@enact/moonstone/Button';
import React from 'react';
import {BoxMainBtn,BtnCheck,BtnConnect} from '../components/Main';
import {BoxPanel,BoxHeader} from '../components/Common';

// 함수형 component
const MainView = (props) => {
	return (
		<BoxPanel>
			<BoxHeader title="차량용 스마트 펫케어: 방울이가 타고 있어요" />
			<BoxMainBtn />
			<BtnConnect />
			<BtnCheck target="kennel" />
			<BtnCheck target="home" />
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
