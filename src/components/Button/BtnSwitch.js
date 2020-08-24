import React from 'react';
import './Button.less';
import BtnVideo from './BtnVideo';
import { Switch } from '../Common';

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