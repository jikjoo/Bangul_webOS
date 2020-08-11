import Button from '@jikjoo/moonstone/Button';
import { Panel, Header } from '@jikjoo/moonstone/Panels';
import Slider from '@jikjoo/moonstone/Slider';
import React from 'react';
import { BoxPanel, BoxHeader, BoxVideoBtn, } from '../../components/Box';
import { VideoKennel } from '../../components/Kennel';

const LampView = (props) => {
    return (
        <BoxVideoBtn>
            <Slider orientation="vertical" />
        </BoxVideoBtn>
    );
}

export default LampView;