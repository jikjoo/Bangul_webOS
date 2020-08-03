import Button from '@jikjoo/moonstone/Button';
import { Panel, Header } from '@jikjoo/moonstone/Panels';
import Slider from '@jikjoo/moonstone/Slider';
import React from 'react';
import {BoxPanel, BoxHeader,} from '../../components/Box';
import VideoKennel from '../../components/Kennel/VideoKennel';

const LampView = (props) => {
    return (
        <BoxPanel>
            <BoxHeader target={"kennel"} sub="lamp"/>
            <Slider/>
            <VideoKennel/>
        </BoxPanel>
    );
}

export default LampView;