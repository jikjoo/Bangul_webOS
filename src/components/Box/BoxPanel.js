import React, { useEffect, useState } from 'react';
import { Panel, Header } from '@jikjoo/moonstone/Panels';
import './Box.less';
import text from '../../../resources/text.json';
import {sendConnectInternet} from '../../actions'
import { connect } from 'react-redux';
import BoxAlarm from './BoxAlarm';

const BoxPanel = ({ children,onLine, ...rest }) => {
    useEffect(() => {
       // onLine();
    })
    const online = window.navigator.onLine;
    return (
        <Panel className={'box box-panel'}>
            {/* <Header title={'헤더'} type="compact"/> */}
            {children}
            <BoxAlarm open={!online} type={'internet_not_connected'}></BoxAlarm>
        </Panel>
    )
}

/* 
const mapStateToProps = ({ connect }) => ({
    online : connect.internetOn
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLine: () => dispatch(sendConnectInternet())
    };
};

const BoxPanelContainer = connect(mapStateToProps, mapDispatchToProps)(BoxPanel);
 */
export default BoxPanel;