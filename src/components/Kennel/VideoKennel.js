import React  from 'react'
import VideoPlayer, { MediaControls } from '@jikjoo/moonstone/VideoPlayer';
import { Video } from '../Common';

const VideoKennel = ({ children, ...props }) => {
    return (
        <Video target="kennel" >
            {children}
        </Video >
    )
}

export default VideoKennel;