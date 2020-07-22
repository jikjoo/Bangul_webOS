import Button from '@enact/moonstone/Button';
import { Panel, Header } from '@enact/moonstone/Panels';
import React from 'react';
import BtnGoBack from '../../components/Buttons/BtnGoBack';

const TempView = (props) => {
    return (
        <Panel>
            <Header title="온도 조절" />
            <BtnGoBack/>
        </Panel>
    );
}

export default TempView;