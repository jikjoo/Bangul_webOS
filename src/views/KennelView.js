import Button from '@enact/moonstone/Button';
import { Panel, Header } from '@enact/moonstone/Panels';
import React from 'react';
import BtnGoMain from '../components/Buttons/BtnGoMain'
import BtnPush from '../components/Buttons/BtnPush';
import {useRouteMatch} from 'react-router-dom';

const KennelView = (props) => {
    let {url} =useRouteMatch();
    return (
        <Panel>
            <Header title="스마트 켄넬" />
            <BtnGoMain/>
            <BtnPush push={`${url}/video`}>내부 영상</BtnPush>
            <BtnPush push={`${url}/lamp`}>무드등</BtnPush>
            <BtnPush push={`${url}/temp`}>온도 조절</BtnPush>
            <BtnPush push={`${url}/fix`}>고정 확인</BtnPush>
        </Panel>
    );
}

export default KennelView;
