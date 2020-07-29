import VideoPlayer from '@jikjoo/moonstone/VideoPlayer';
import { Panel, Header } from '@jikjoo/moonstone/Panels';
import React from 'react';
import VomitCheck from '../../components/Kennel/VomitCheck';
import { BoxPanel, BoxHeader,Video, StayTime } from '../../components/Common';

const VideoView = (props) => {
    return (
        <BoxPanel>
            <BoxHeader title="켄넬 내부 영상" />
            <StayTime />
            <VomitCheck />
            <Video/>
        </BoxPanel>
    );
}

export default VideoView;