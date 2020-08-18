import React from 'react';
import './Button.less';
import Switch from '@jikjoo/moonstone/Switch';
import BtnVideo from './BtnVideo';

const BtnSwitch = ({ children, selected, ...props }) => {
    return (
        <BtnVideo
            className="button btn-switch"
            {...props}
        >
            {children}<br />
            <Switch selected={selected} />
        </BtnVideo>
    )
}

export default BtnSwitch