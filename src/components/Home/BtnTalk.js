import React, { useState } from 'react';
import BtnSwitch from '../Button/BtnSwitch';
import { connect } from 'react-redux';
import { setTalkOn } from '../../actions';

const BtnTalk = ({ talkOn,setTalkOn }) => {
    const onClick = () => {
        // 내 마이크 끄고 키기 설정
        setTalkOn(!talkOn)
    }
    return (
        <BtnSwitch
            className="button btn-switch"
            selected={talkOn}
            onClick={onClick}
        >
            대화하기
        </BtnSwitch>
    )
}

const mapStateToProps = ({ video }) => ({
    talkOn: video.talkOn
});

const mapDispatchToProps = (dispatch) => {
    return {
        setTalkOn: (talkOn) => dispatch(setTalkOn(talkOn))
    };
};


const BtnTalkContainer = connect(mapStateToProps, mapDispatchToProps)(BtnTalk);

export default BtnTalkContainer