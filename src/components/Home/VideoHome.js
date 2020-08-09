import React  from 'react'
import VideoPlayer, { MediaControls } from '@jikjoo/moonstone/VideoPlayer';
import { Video } from '../Common';

const VideoHome = ({ children,sub, ...props }) => {
    return (
        <Video target="home" sub={sub} {...props} >
            {children}
        </Video >
    )
}

export default VideoHome;