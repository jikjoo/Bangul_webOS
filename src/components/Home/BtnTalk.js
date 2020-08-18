import React, { useState } from 'react';
import BtnSwitch from '../Button/BtnSwitch';

const BtnTalk = ({ children, ...props }) => {
    const [talkOn, setTalk] = useState(false);
    const onClick = () => {
        setTalk(!talkOn);
    }
    return (
        <BtnSwitch
            className="button btn-switch"
            selected={talkOn}
            onClick={onClick}
            {...props}
        >
            대화하기
        </BtnSwitch>
    )
}

export default BtnTalk