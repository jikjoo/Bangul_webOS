import Button from '@enact/moonstone/Button';
import { Panel, Header } from '@enact/moonstone/Panels';
import React from 'react';
import { useHistory } from 'react-router-dom';

// 함수형 component

const MainView = (props) => {
	let history = useHistory();
	return (
		<Panel>
			<Header title="차량용 스마트 펫케어: 방울이가 타고 있어요" />
			<Button onClick={(e)=>{history.push("/home")}}>스마트 홈</Button>
			<Button onClick={(e)=>{history.push("/kennel")}}>스마트 켄넬</Button>
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
