import Button from '@jikjoo/moonstone/Button';
import { Panel, Header } from '@jikjoo/moonstone/Panels';
import React from 'react';
import { BoxHeader, BoxPanel } from '../components/Box';
import { VideoHome } from '../components/Home';
import { BtnVideo } from '../components/Button';

const HomeView = (props) => {
    return (
        <BoxPanel >
            <BoxHeader target="home" />
            <VideoHome >
                <BtnVideo>대화하기</BtnVideo>
                <BtnVideo>소리 듣기</BtnVideo>
                <BtnVideo>무드등</BtnVideo>
                <BtnVideo>간식주기</BtnVideo>
            </VideoHome>
        </BoxPanel>
    )
}

export default HomeView;
