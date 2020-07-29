import Slider from '../../../bangulTheme/Slider';
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