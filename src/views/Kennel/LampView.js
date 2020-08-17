import Slider from '@jikjoo/moonstone/Slider';
import React from 'react';
import { BoxVideoBtn, } from '../../components/Box';

const LampView = () => {
    return (
        <BoxVideoBtn>
            <Slider orientation="vertical" />
        </BoxVideoBtn>
    );
}

export default LampView;