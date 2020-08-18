import React, { useState } from 'react';
import BtnSwitch from '../Button/BtnSwitch';

const BtnLamp = ({ children, ...props }) => {
    const [lampOn, setLamp] = useState(false);
    const onClick = () => {
        setLamp(!lampOn);
    }
    return (
        <BtnSwitch
            className="button btn-switch"
            selected={lampOn}
            onClick={onClick}
            {...props}
        >
            무드등
        </BtnSwitch>
    )
}

export default BtnLamp