import Slider from '@jikjoo/moonstone/Slider';
import React from 'react';

const SliderLamp = () => {
    const ori = (window.innerWidth < 420) ? "horizontal" : "vertical"
    return (
        <Slider orientation={ori}
            defaultValue={50}
            css={{ slider: "slider-lamp" }}
        />
    )
}

export default SliderLamp;