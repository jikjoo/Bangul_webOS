import Button from '@jikjoo/moonstone/Button';
import BodyText from '@jikjoo/moonstone/BodyText';
import React from 'react';
import { BoxHeader, BoxPanel } from '../../components/Common';

const FixView = (props) => {
    return (
        <BoxPanel>
            <BoxHeader title="켄넬 고정 확인" />
            <BodyText>좌측 고정 확인</BodyText>
            <BodyText>우측 고정 확인</BodyText>
            <BodyText>강한 충격 감지</BodyText>

        </BoxPanel>
    );
}

export default FixView;