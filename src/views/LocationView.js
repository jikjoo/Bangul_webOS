import Button from '@enact/moonstone/Button';
import { Panel, Header } from '@enact/moonstone/Panels';
import React from 'react';
import BtnGoMain from '../components/Buttons/BtnGoMain'

const LocationView = (props) => {
    return (
        <Panel>
            <Header title="위치 정보" />
            <BtnGoMain/>
        </Panel>
    );
}

export default LocationView;
