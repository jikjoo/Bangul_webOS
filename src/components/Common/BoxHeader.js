import React from 'react';
import { Header } from '../../../bangulTheme/Panels';
import BtnGoBack from './BtnGoBack';
import BtnGoMain from './BtnGoMain';

const BoxHeader = ({ title, ...props }) => {
    return (
        <Header title={title}>
            <BtnGoBack/>
            <BtnGoMain/>
        </Header>
    )
}

export default BoxHeader;