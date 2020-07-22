import Button from '@enact/moonstone/Button';
import { Panel, Header } from '@enact/moonstone/Panels';
import Slider from '@enact/moonstone/Slider';
import React from 'react';
import BtnGoBack from '../../components/Buttons/BtnGoBack';
import Video from '../../components/Video';

const LampView = (props) => {
    return (
        <Panel>
            <Header title="무드등 조절" />
            <BtnGoBack/>
            <Slider/>
            <Video/>
        </Panel>
    );
}

export default LampView;