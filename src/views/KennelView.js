import Button from '@enact/moonstone/Button';
import { Panel, Header } from '@enact/moonstone/Panels';
import React from 'react';
import { useHistory } from 'react-router-dom';

const KennelView = (props) => {
    let history = useHistory();
    return (
        <Panel>
            <Header title="스마트 켄넬" />
            <Button onClick={(e) => { history.replace("/") }}>메인화면으로</Button>
        </Panel>
    );
}

export default KennelView;
