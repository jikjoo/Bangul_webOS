import React, { useEffect } from 'react';
import { Panel } from '@jikjoo/moonstone/Panels';
import './Box.less';
import { sendConnectServer, setLoading, createToast } from '../../actions'
import { connect } from 'react-redux';
import BoxAlarm from './BoxAlarm';

const BoxPanel = ({ children, sendConnectServer, createToast,
    serverOn, setLoading, loading, ...rest }) => {
    const online = window.navigator.onLine;
    useEffect(() => {
        if (!online) {
            createToast('internet_not_connected');
        }
        else {
            sendConnectServer()
        }
    })
    return (
        <Panel className={'box box-panel'} {...rest}>
            {/* <Header title={'헤더'} type="compact"/> */}
            {children}
            <BoxAlarm open={!online} type={'internet_not_connected'}></BoxAlarm>
            <BoxAlarm open={!serverOn} type="server_not_connected" />
        </Panel>
    )
}

const mapStateToProps = ({ connect, loading }) => ({
    serverOn: connect.serverOn,
    loading: loading
});

const mapDispatchToProps = (dispatch) => {
    return {
        sendConnectServer: () => dispatch(sendConnectServer()),
        setLoading: (loading) => dispatch(setLoading(loading)),
        createToast: (type) => dispatch(createToast(type))
    };
};

const BoxPanelContainer = connect(mapStateToProps, mapDispatchToProps)(BoxPanel);

export default BoxPanelContainer;