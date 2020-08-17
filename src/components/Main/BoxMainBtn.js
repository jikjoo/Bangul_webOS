import React, { useEffect } from 'react';
import BtnGoto from './BtnGoto';
import { connect } from 'react-redux';
import text from '../../../resources/text.json';
import BoxAlarm from '../Box/BoxAlarm';

const BoxMainBtn = ({ children,  ...props }) => {
    return (
        <div className={"box-main-btn enact-fit"}>
            {children}
        </div>
    )
}

export default BoxMainBtn;