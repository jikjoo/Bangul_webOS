import Slider from '@jikjoo/moonstone/Slider';
import React from 'react';

const SliderLamp = () => {
    return (
        <Slider orientation="vertical"
            defaultValue = {50}
            css={{slider:"slider-lamp"}}
        />
    )
}

export default SliderLamp;