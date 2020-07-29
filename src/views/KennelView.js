import React from 'react';
import { BoxHeader, BoxPanel, Video } from '../components/Common';
import BtnVideoPush from '../components/Kennel/BtnVideoPush';

const KennelView = (props) => {
    return (
        <BoxPanel>
            <BoxHeader title="스마트 켄넬" />
            <Video>
                <BtnVideoPush push={`/kennel/video`}>내부 영상</BtnVideoPush>
                <BtnVideoPush push={`/kennel/lamp`}>무드등</BtnVideoPush>
                <BtnVideoPush push={`/kennel/temp`}>온도 조절</BtnVideoPush>
                <BtnVideoPush push={`/kennel/fix`}>고정 확인</BtnVideoPush>
            </Video>
        </BoxPanel>
    );
}

export default KennelView;
