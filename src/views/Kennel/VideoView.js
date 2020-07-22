import VideoPlayer from '@enact/moonstone/VideoPlayer';
import { Panel, Header } from '@enact/moonstone/Panels';
import React from 'react';
import BtnGoBack from '../../components/Buttons/BtnGoBack';
import StayTime from '../../components/StayTIme';
import VomitCheck from '../../components/VomitCheck';
import Video from '../../components/Video';

const VideoView = (props) => {
    return (
        <Panel>
            <Header title="켄넬 내부 영상" />
            <BtnGoBack />
            <StayTime />
            <VomitCheck />
            <Video/>
        </Panel>
    );
}

export default VideoView;