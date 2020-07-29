import React from 'react';
import { Header } from '@jikjoo/moonstone/Panels';
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