import React from 'react';
import ButtonBase from '@jikjoo/moonstone/Button';
import styles from './Button.less';

const Button = ({ children, ...props }) => {
    return (
        <ButtonBase
            className="button"
            css={{
                bg : 'bg'
            }}
            {...props}
        >
            {children}
        </ButtonBase>
    )
}

export default Button