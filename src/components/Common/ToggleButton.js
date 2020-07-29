import React from 'react';
import ToggleButtonBase from '@jikjoo/moonstone/ToggleButton';
import styles from './Button.less';

const ToggleButton = ({ children, ...props }) => {
    return (
        <ToggleButtonBase
            className="button toggle"
            css={{
                bg : 'bg'
            }}
            {...props}
        >
            {children}
        </ToggleButtonBase>
    )
}

export default ToggleButton