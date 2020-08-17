import React from 'react';
import './Box.less';

const BoxVideoBtn = ({children,...props}) => {
    return (
        <div className={`box box-video-btn`} {...props}>
            {children}
        </div>
    )
}
export default BoxVideoBtn;