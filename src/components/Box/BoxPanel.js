import React from 'react';
import {Panel,Header} from '@jikjoo/moonstone/Panels';
import './Box.less';

const BoxPanel = ({ children, ...rest }) => {
    return (
        <Panel className={'box box-panel'}>
            {/* <Header title={'헤더'} type="compact"/> */}
            {children}
        </Panel>
    )
}

export default BoxPanel;