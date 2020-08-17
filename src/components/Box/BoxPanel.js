import React, { useEffect } from 'react';
import { Panel } from '@jikjoo/moonstone/Panels';
import './Box.less';
import { sendConnect } from '../../actions'
import { connect } from 'react-redux';
import BoxAlarm from './BoxAlarm';

const BoxPanel = ({ children, isConn, onConnect, ...rest }) => {
    useEffect(() => {
        !isConn && onConnect()
    },)
    const online = window.navigator.onLine;
    return (
        <Panel className={'box box-panel'} {...rest}>
            {/* <Header title={'헤더'} type="compact"/> */}
            {children}
            <BoxAlarm open={!online} type={'internet_not_connected'}></BoxAlarm>
            <BoxAlarm open={!isConn} type="server_not_connected" />
        </Panel>
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

const BoxPanelContainer = connect(mapStateToProps, mapDispatchToProps)(BoxPanel);

export default BoxPanelContainer;