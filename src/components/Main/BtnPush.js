import React, { useEffect, useState } from 'react';
import Button from '../Common/Button';
import { useHistory, withRouter } from 'react-router-dom';
import { Icon } from '../Common'
import text from '../../../resources/text'
import './Main.less'
import { sendCheckConnect } from '../../actions';
import { connect } from 'react-redux';

// Class형 component 
class BtnPush extends React.Component {
    //생성자
    constructor(props) {
        super(props)
        // 상태 : react에서 변수를 저장하는 곳
        this.state = { alarmOn: false }
        // onPush 함수를 component에 종속시키기
        this.onPush = this.onPush.bind(this);
    }
    //BtnPush가 rendering 되고 난 직후
    componentDidMount() {
        const { push, onCheck } = this.props;
        onCheck(push);
    }
    onPush = (e) => {
        const { push, check, history, onCheck } = this.props;
        onCheck(push);
        if (push === 'home' || push === 'kennel' && !check[push].isOn)
            this.setState({ alarmOn: true });
        // 장치들과 연결이 안됐을 때, 화면으로 넘어갈 수 있을지 말지
        //else
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
Container 부분
redux랑 연결 시키기 위한 코드. 

redux-store 내의 state 안에 check의 구조
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
// 장치의 연결을 확인하는 action과 onCheck 함수 연결하기
const mapDispatchToProps = (dispatch) => {
    return {
        onCheck: (target) => dispatch(sendCheckConnect(target))
    };
};
// withRouter는 this.props.history 사용할 수 있도록 하기 : 다른 화면으로 넘어가도록
const BtnPushContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(BtnPush));

export default BtnPushContainer;