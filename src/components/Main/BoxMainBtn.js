import React from 'react';
import BtnPush from './BtnPush';

const BoxMainBtn = (props) => {
    return (
        <div className={"box-main-btn enact-fit"}>
            {props.children}
        </div>
    )
}

export default BoxMainBtn;