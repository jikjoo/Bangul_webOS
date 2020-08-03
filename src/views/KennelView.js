import Button from '@jikjoo/moonstone/Button';
import { Panel, Header } from '@jikjoo/moonstone/Panels';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { BoxHeader, BoxPanel } from '../components/Box';
import {Video} from '../components/Common';
import BtnVideoPush from '../components/Kennel/BtnVideoPush';
import VideoKennel from '../components/Kennel/VideoKennel';

const KennelView = (props) => {
    return (
        <BoxPanel>
            <BoxHeader title="스마트 켄넬" />
            <VideoKennel>
                <BtnVideoPush push={`/kennel/video`}>내부 영상</BtnVideoPush>
                <BtnVideoPush push={`/kennel/lamp`}>무드등</BtnVideoPush>
                <BtnVideoPush push={`/kennel/temp`}>온도 조절</BtnVideoPush>
                <BtnVideoPush push={`/kennel/fix`}>고정 확인</BtnVideoPush>
            </VideoKennel>
        </BoxPanel>
    );
}

export default KennelView;
