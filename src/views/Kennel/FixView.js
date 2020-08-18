import React from 'react';
import { BoxVideoBtn } from '../../components/Box';
import { BtnVideo } from '../../components/Button';

const FixView = () => {
    return (
        <>
            <BtnVideo>좌측 고정<br /> 확인</BtnVideo>
            <BtnVideo>우측 고정<br /> 확인</BtnVideo>
            <BtnVideo>강한 충격<br /> 감지</BtnVideo>
        </>
    );
}

export default FixView;