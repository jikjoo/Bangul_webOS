import Button from '@enact/moonstone/Button';
import BodyText from '@enact/moonstone/BodyText';
import { Panel, Header } from '@enact/moonstone/Panels';
import React from 'react';
import BtnGoBack from '../../components/Buttons/BtnGoBack';

const FixView = (props) => {
    return (
        <Panel>
            <Header title="켄넬 고정 확인" />
            <BtnGoBack/>
            <BodyText>좌측 고정 확인</BodyText>
            <BodyText>우측 고정 확인</BodyText>
            <BodyText>강한 충격 감지</BodyText>

        </Panel>
    );
}

export default FixView;