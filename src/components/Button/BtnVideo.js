import React from 'react';
import Button from '@jikjoo/moonstone/Button';
import './Button.less';

const BtnVideo = ({ children, className, ...props }) => {
    return (
        <Button
            className={`button btn-video ${className}`}
            {...props}
        >
            {children}
        </Button>
    )
}
export default BtnVideo;