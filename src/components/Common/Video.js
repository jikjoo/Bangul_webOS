import React from 'react'
import VideoPlayer, { MediaControls } from '../../../bangulTheme/VideoPlayer';
import BtnVideo from './BoxVideoBtn';
import BoxVideoBtn from './BoxVideoBtn';
import style from './Video.less';

const Video = ({ children, ...props }) => {
    return (
        <div className="box-video"  style={style}>
            <VideoPlayer className="video">
                <source src="http://media.w3.org/2010/05/sintel/trailer.mp4"></source>
            </VideoPlayer>
            <BoxVideoBtn>
                {children}
            </BoxVideoBtn>
        </div>
    )
}

export default Video;