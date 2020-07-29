import React from 'react';
import {Panel,Header} from '@jikjoo/moonstone/Panels';
import BtnGoMain from './BtnGoMain';
import BtnGoBack from './BtnGoBack';
import './Box.less';

const BoxPanel = ({ children, ...rest }) => {
    return (
        <Panel className={'box box-panel'}>
            {children}
        </Panel>
    )
}

export default BoxPanel;