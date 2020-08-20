import React, { useEffect } from 'react';
import { Panel } from '@jikjoo/moonstone/Panels';
import './Box.less';
import { sendConnectServer, sendConnectInternet } from '../../actions'
import { connect } from 'react-redux';
import BoxAlarm from './BoxAlarm';

const BoxPanel = ({ children, isConn, onConnect, onInternet, online, ...rest }) => {
    useEffect(() => {
        !isConn && onConnect()
        !online && onInternet()
    })
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
    err: connect.serverError,
    online : connect.myip
});

const mapDispatchToProps = (dispatch) => {
    return {
        onConnect: () => dispatch(sendConnectServer()),
        onInternet: () => dispatch(sendConnectInternet())
    };
};

const BoxPanelContainer = connect(mapStateToProps, mapDispatchToProps)(BoxPanel);

export default BoxPanelContainer;