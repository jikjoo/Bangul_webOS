import React, { useEffect, useState } from 'react';
import Button from '../Common/Button';
import { useHistory, withRouter } from 'react-router-dom';
import { Icon } from '../Common'
import text from '../../../resources/text'
import './Main.less'
import { sendCheckConnect } from '../../actions';
import { connect } from 'react-redux';

class BtnPush extends React.Component {
    constructor(props) {
        super(props)
        this.state = { alarmOn: false }
        this.onPush = this.onPush.bind(this);
    }
    componentDidMount() {
        const { push, onCheck } = this.props;
        onCheck(push);
    }
    onPush = (e) => {
        const { push, check, history,onCheck } = this.props;
        onCheck(push);
        if (push === 'home' || push === 'kennel' && !check[push].isOn)
            this.setState({ alarmOn: true });
        else
            history.push(push)
    }
    render() {
        const { push, children, check, onCheck, ...rest } = this.props;
        const { alarmOn } = this.state;
        return (
            <Button className={"button btn-push"} onClick={this.onPush}>
                <div className={"icon-main"}><Icon icon={push} /></div>
                {text[push]}
                {alarmOn ?
                    <div>{`연결 안됨 ${check[push].error}`}</div> : null}
                {children}
            </Button>

        )
    }
}
/* 
check : {
    home : {
        isOn : false,
        error : ''
    },
    kennel : {
        isOn : false,
        error : ''
    }
}
*/
const mapStateToProps = ({ check }) => ({
    check
});

const mapDispatchToProps = (dispatch) => {
    return {
        onCheck: (target) => dispatch(sendCheckConnect(target))
    };
};

const BtnPushContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(BtnPush));

export default BtnPushContainer;