import Button from '@enact/moonstone/Button';
import { Panel, Header } from '@enact/moonstone/Panels';
import Slider from '@enact/moonstone/Slider';
import React from 'react';
import { BoxPanel, BoxHeader,Video } from '../../components/Common';

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