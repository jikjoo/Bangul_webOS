import React from 'react';
import './Button.less';
import Switch from '@jikjoo/moonstone/Switch';
import BtnVideo from './BtnVideo';
import { Icon } from '../Common';

const BtnSwitch = ({ children, selected, ...props }) => {
    return (
        <BtnVideo
            className="button btn-switch"
            {...props}
        >
            {children}<br />
            <Switch className="switch" selected={selected} >
                ●
            </Switch>
        </BtnVideo>
    )
}

export default BtnSwitch