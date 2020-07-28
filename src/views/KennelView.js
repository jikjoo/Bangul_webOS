import Button from '@enact/moonstone/Button';
import { Panel, Header } from '@enact/moonstone/Panels';
import React from 'react';
import BtnPush from '../components/Main/BtnPush';
import { useRouteMatch } from 'react-router-dom';
import { BoxHeader, BoxPanel } from '../components/Common';

const KennelView = (props) => {
    let { url } = useRouteMatch();
    return (
        <BoxPanel>
            <BoxHeader title="스마트 켄넬" />
            <BtnPush push={`${url}/video`}>내부 영상</BtnPush>
            <BtnPush push={`${url}/lamp`}>무드등</BtnPush>
            <BtnPush push={`${url}/temp`}>온도 조절</BtnPush>
            <BtnPush push={`${url}/fix`}>고정 확인</BtnPush>
        </BoxPanel>
    );
}

export default KennelView;
