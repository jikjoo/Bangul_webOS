import React from 'react'
import { BtnVideo } from '../Button';

const VomitCheck = ({ ...props }) => {
    return (
        <BtnVideo {...props}>
            <p>토 안 했어요</p>
        </BtnVideo>
    )
}

export default VomitCheck;