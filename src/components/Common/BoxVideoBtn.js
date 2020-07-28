import React from 'react';
import { BtnPush } from '../Main';
import { useRouteMatch } from 'react-router-dom';
import './Box.less';

const BoxVideoBtn = ({children,...props}) => {
    return (
        <div className={`box box-video-btn`} >
            {children}
        </div>
    )
}
export default BoxVideoBtn;