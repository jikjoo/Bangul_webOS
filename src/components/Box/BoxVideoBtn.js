import React from 'react';
import './Box.less';

const BoxVideoBtn = ({children,...props}) => {
    return (
        <div className={`box box-video-btn`} >
            {children}
        </div>
    )
}
export default BoxVideoBtn;