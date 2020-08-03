import React from 'react';
import { Header } from '@jikjoo/moonstone/Panels';
import {BtnGoBack, BtnGoMain} from '../Button';

const BoxHeader = ({ title, ...props }) => {
    return (
        <Header title={title}>
            <BtnGoBack/>
            <BtnGoMain/>
        </Header>
    )
}

export default BoxHeader;