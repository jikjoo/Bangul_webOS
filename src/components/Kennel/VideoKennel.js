import React  from 'react'
import { Video } from '../Video';

const VideoKennel = ({ children,sub, ...props }) => {
    return (
        <Video target="kennel" sub={sub} {...props} >
            {children}
        </Video >
    )
}

export default VideoKennel;