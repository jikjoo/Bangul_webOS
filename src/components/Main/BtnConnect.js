import React, { useState } from 'react';
import ToggleButton from '../../../bangulTheme/ToggleButton';
import axios from '../../api';
import {sendConnect} from '../../actions'
import {connect} from 'react-redux';

const BtnConnect = ({isConn,onConnect,err,...rest}) => {
    return (
        <div>
            <ToggleButton selected={isConn} onClick={onConnect}>
            {`메인서버 연결`}
            </ToggleButton>
            <span>
                {`${err}`}
            </span>

        </div>
    );
}

// container : connect components and redux

const mapStateToProps = ({connect}) => ({
    isConn : connect.isOn,
    err : connect.error
});

const mapDispatchToProps = (dispatch) => {
	return {
		onConnect: () => dispatch(sendConnect())
	};
};

const BtnConnectContainer = connect(mapStateToProps, mapDispatchToProps)(BtnConnect);

export default BtnConnectContainer;