import BodyText from '@jikjoo/moonstone/BodyText';
import React from 'react';
import { BoxVideoBtn } from '../../components/Box';

const FixView = () => {
    return (
        <BoxVideoBtn>
            <BodyText>좌측 고정 확인</BodyText>
            <BodyText>우측 고정 확인</BodyText>
            <BodyText>강한 충격 감지</BodyText>
        </BoxVideoBtn>
    );
}

export default FixView;