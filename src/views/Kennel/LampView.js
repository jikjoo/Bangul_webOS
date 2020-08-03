import Button from '@jikjoo/moonstone/Button';
import { Panel, Header } from '@jikjoo/moonstone/Panels';
import Slider from '@jikjoo/moonstone/Slider';
import React from 'react';
import { Video } from '../../components/Common';
import {BoxPanel, BoxHeader,} from '../../components/Box';

const LampView = (props) => {
    return (
        <BoxPanel>
            <BoxHeader title="무드등 조절" />
            <Slider/>
            <Video/>
        </BoxPanel>
    );
}

export default LampView;