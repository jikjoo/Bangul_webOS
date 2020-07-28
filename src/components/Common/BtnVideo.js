import React from 'react';
import Button from '@enact/moonstone/Button';
import './Button.less';

const BtnVideo = ({children,...props}) => {
    return (
        <Button
            {...props}
            className={"button btn-video"}
            >
            {children}
        </Button>
    )
}
export default BtnVideo;