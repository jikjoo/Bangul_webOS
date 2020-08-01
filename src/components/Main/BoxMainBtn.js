import React, { useEffect } from 'react';
import BtnPush from './BtnPush';
import { sendConnect } from '../../actions'
import { connect } from 'react-redux';

const BoxMainBtn = ({ children, isConn, err, onConnect, ...props }) => {
    useEffect(() => {
        onConnect()
    })
    return (
        <div className={"box-main-btn enact-fit"}>
            {children}
            {isConn ? null :
                <div className={"alarm connect-miss"}>
                    연결 안됨
                </div>}
        </div>
    )
}


const mapStateToProps = ({ connect }) => ({
    isConn: connect.isOn,
    err: connect.error
});

const mapDispatchToProps = (dispatch) => {
    return {
        onConnect: () => dispatch(sendConnect())
    };
};

const BoxMainBtnContainer = connect(mapStateToProps, mapDispatchToProps)(BoxMainBtn);

export default BoxMainBtnContainer;