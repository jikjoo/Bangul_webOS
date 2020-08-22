import React from 'react';
import { BoxHeader, BoxPanel, BoxVideoBtn } from '../components/Box';
import { VideoHome, BtnTalk, BtnAudio, BtnLamp } from '../components/Home';
import { BtnVideo } from '../components/Button';

const HomeView = () => {
    return (
        <BoxPanel >
            <BoxHeader target="home" />
            <VideoHome >
                <BoxVideoBtn>
                    <BtnAudio />
                    <BtnTalk />
                    <BtnLamp/>
                    <BtnVideo>간식주기</BtnVideo>
                </BoxVideoBtn>
            </VideoHome>
        </BoxPanel>
    )
}

export default HomeView;
