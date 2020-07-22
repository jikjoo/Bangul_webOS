import Button from '@enact/moonstone/Button';
import { Panel, Header } from '@enact/moonstone/Panels';
import React from 'react';
import BtnGoMain from '../components/Buttons/BtnGoMain'

const HomeView = (props) => {
    return (
        <Panel >
            <Header title="스마트 홈" />
            <BtnGoMain/>
        </Panel>
    )
}

export default HomeView;
