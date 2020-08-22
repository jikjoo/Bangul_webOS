import React from 'react';
import { BtnVideo } from '../../components/Button';
import { BtnSetTemp } from '../../components/Kennel';

const TempView = () => {
    return (
        <>
            <BtnVideo>현재 온도<br/>27℃</BtnVideo>
            <BtnSetTemp/>
        </>
    );
}

export default TempView;