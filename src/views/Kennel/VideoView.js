import React from 'react';
import VomitCheck from '../../components/Kennel/VomitCheck';
import { StayTime } from '../../components/Common';
import { BoxVideoBtn } from '../../components/Box';

const VideoView = () => {
    return (
        <BoxVideoBtn>
            <StayTime />
            <VomitCheck />
        </BoxVideoBtn>
    );
}

export default VideoView;