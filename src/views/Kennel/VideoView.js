import VideoPlayer from '@jikjoo/moonstone/VideoPlayer';
import { Panel, Header } from '@jikjoo/moonstone/Panels';
import React from 'react';
import VomitCheck from '../../components/Kennel/VomitCheck';
import {Video, StayTime } from '../../components/Common';
import { BoxPanel, BoxHeader} from '../../components/Box';
import VideoKennel from '../../components/Kennel/VideoKennel';

const VideoView = (props) => {
    return (
        <BoxPanel>
            <BoxHeader target={"kennel"} sub="video"/>
            <StayTime />
            <VomitCheck />
            <VideoKennel/>
        </BoxPanel>
    );
}

export default VideoView;