import React, { useEffect, useState } from 'react'
import VideoPlayer, { MediaControls } from '@jikjoo/moonstone/VideoPlayer';
import { BtnVideo } from '../Button';
import { BoxVideoBtn } from '../Box';
import './Common.less';
import { connect } from 'react-redux';
import { sendVideoURL } from '../../actions';

const Video = ({ children, video, target, onURL, sub, ...props }) => {
    useEffect(() => {
        onURL(target);
    }, [])
    const className = sub ? "video-small" : "";
    const { url } = video[target]
    return (
        <div className="box-video"  {...props}>
            <img className={`video enact-fit ${className}`} src={url}></img>
            {/* <VideoPlayer className="video">
                <source src="http://media.w3.org/2010/05/sintel/trailer.mp4"></source>
            </VideoPlayer> */}
            <BoxVideoBtn>
                {children}
            </BoxVideoBtn>
        </div>
    )
}
/*
video : {
    home : {
       url : ''
    },
    kennel : {
        url : ''
    }
}
*/

const mapStateToProps = ({ video }) => ({
    video
});
// 장치의 연결을 확인하는 action과 onCheck 함수 연결하기
const mapDispatchToProps = (dispatch) => {
    return {
        onURL: (target) => dispatch(sendVideoURL(target))
    };
};
// withRouter는 this.props.history 사용할 수 있도록 하기 : 다른 화면으로 넘어가도록
const VideoContainer = connect(mapStateToProps, mapDispatchToProps)(Video);

export default VideoContainer;