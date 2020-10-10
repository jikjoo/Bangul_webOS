import React from 'react';
import { Button } from '../Button';
import { withRouter } from 'react-router-dom';
import { Icon, Switch } from '../Common'
import text from '../../../resources/text'
import './Main.less'
import { sendCheck } from '../../actions';
import { connect } from 'react-redux';

// Class형 component 
class BtnGoto extends React.Component {
    //생성자
    constructor(props) {
        super(props)
        // 상태 : react에서 변수를 저장하는 곳
        // onGoto 함수를 component에 종속시키기
        this.onGoto = this.onGoto.bind(this);
    }
    //BtnGoto가 rendering 되고 난 직후
    componentDidMount() {
        const { target, onCheck, check } = this.props;
        if (!check[target].isOn) onCheck(target);
    }
    onGoto = () => {
        const { target, check, history, onCheck, } = this.props;
        if (!check[target].isOn) onCheck(target);
        // 장치들과 연결이 안됐을 때, 화면으로 넘어갈 수 있을지 말지
        //else
        history.push(target)
    }
    render() {
        const { target, children, check, serverOn } = this.props;
        return (
            <Button className={"button btn-push"} onClick={this.onGoto} >
                <div className={"icon-main"}><Icon icon={target} /></div>
                {text[target]}
                <div>
                    <Switch selected={serverOn} />
                </div>
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

const mapStateToProps = ({ check, connect }) => ({
    check, serverOn: connect.serverOn
});
// 장치의 연결을 확인하는 action과 onCheck 함수 연결하기
const mapDispatchToProps = (dispatch) => {
    return {
        onCheck: (target) => dispatch(sendCheck(target))
    };
};
// withRouter는 this.props.history 사용할 수 있도록 하기 : 다른 화면으로 넘어가도록
const BtnGotoContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(BtnGoto));

export default BtnGotoContainer;