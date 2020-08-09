import React, { useEffect } from 'react';
import BtnPush from './BtnPush';
import { sendConnect } from '../../actions'
import { connect } from 'react-redux';
import text from '../../../resources/text.json';
import BoxAlarm from '../Box/BoxAlarm';

const BoxMainBtn = ({ children, isConn, err, onConnect, ...props }) => {
    useEffect(() => {
        onConnect()
    })
    return (
        <div className={"box-main-btn enact-fit"}>
            {children}
            <BoxAlarm open={!isConn} type="server_not_connected" />
        </div>
    )
}

const mapStateToProps = ({ connect }) => ({
    isConn: connect.serverOn,
    err: connect.serverError
});

const mapDispatchToProps = (dispatch) => {
    return {
        onConnect: () => dispatch(sendConnect())
    };
};

const BoxMainBtnContainer = connect(mapStateToProps, mapDispatchToProps)(BoxMainBtn);

export default BoxMainBtnContainer;