import React, { useState } from 'react';
import ToggleButton from '../../../bangulTheme/ToggleButton';
import axios from '../../api';
import { sendConnect, sendCheckConnect } from '../../actions'
import { connect } from 'react-redux';

const BtnCheck = (
    { target, isHomeOn, isKennelOn, homeError, kennelError,onCheck, ...rest }) => {
    const txt = {
        home: '스마트 홈',
        kennel: '스마트 켄넬'
    }
    const isConn = target=='home'? isHomeOn : isKennelOn;
    const err = target=='home'?homeError:kennelError;
    return (
        <div>
            <ToggleButton selected={isConn} onClick={() => onCheck(target)}>
                {`${txt[target]} 연결`}
            </ToggleButton>
            <span>
                {`${err}`}
            </span>

        </div>
    );
}



const mapStateToProps = ({ check }) => ({
    isHomeOn: check.home.isOn,
    homeError: check.home.error,
    isKennelOn: check.kennel.isOn,
    kennelError: check.kennel.error
});

const mapDispatchToProps = (dispatch) => {
    return {
        onCheck: (target) => dispatch(sendCheckConnect(target))
    };
};

const BtnCheckContainer = connect(mapStateToProps, mapDispatchToProps)(BtnCheck);

export default BtnCheckContainer;