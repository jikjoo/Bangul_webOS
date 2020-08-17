import React from 'react';

const BoxMainBtn = ({ children,  ...props }) => {
    return (
        <div className={"box-main-btn enact-fit"} {...props}>
            {children}
        </div>
    )
}

export default BoxMainBtn;