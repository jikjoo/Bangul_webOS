import React from 'react';
import {Panel,Header} from '../../../bangulTheme/Panels';
import BtnGoMain from './BtnGoMain';
import BtnGoBack from './BtnGoBack';

const BoxPanel = ({ children, ...rest }) => {
    return (
        <Panel className={'box-panel'}>
            {children}
        </Panel>
    )
}

export default BoxPanel;