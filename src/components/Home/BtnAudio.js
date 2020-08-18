import React, { useState } from 'react';
import BtnSwitch from '../Button/BtnSwitch';

const BtnAudio = ({ children, ...props }) => {
    const [audioOn, setAudio] = useState(true);
    const onClick = () => {
        setAudio(!audioOn);
    }
    return (
        <BtnSwitch
            className="button btn-switch"
            selected={audioOn}
            onClick={onClick}
            {...props}
        >
            소리듣기
        </BtnSwitch>
    )
}

export default BtnAudio