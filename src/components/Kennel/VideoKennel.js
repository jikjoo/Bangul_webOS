import React  from 'react'
import VideoPlayer, { MediaControls } from '@jikjoo/moonstone/VideoPlayer';
import { Video } from '../Video';

const VideoKennel = ({ children,sub, ...props }) => {
    return (
        <Video target="kennel" sub={sub} {...props} >
            {children}
        </Video >
    )
}

export default VideoKennel;