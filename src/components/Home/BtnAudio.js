import React, { useState } from 'react';
import BtnSwitch from '../Button/BtnSwitch';
import { setAudioOn } from '../../actions';
import { connect } from 'react-redux';

const BtnAudio = ({ audioOn, setAudioOn }) => {
    const onClick = () => {
        setAudioOn(!audioOn);
    }
    return (
        <BtnSwitch
            className="button btn-switch"
            selected={audioOn}
            onClick={onClick}
        >
            소리듣기
        </BtnSwitch>
    )
}

const mapStateToProps = ({ video }) => ({
    audioOn: video.audioOn
});

const mapDispatchToProps = (dispatch) => {
    return {
        setAudioOn: (audioOn) => dispatch(setAudioOn(audioOn))
    };
};


const BtnAudioContainer = connect(mapStateToProps, mapDispatchToProps)(BtnAudio);

export default BtnAudioContainer