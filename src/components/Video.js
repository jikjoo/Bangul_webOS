import React from 'react'
import VideoPlayer from '@enact/moonstone/VideoPlayer';

const Video = () => {
    return (

        <VideoPlayer style={{ position: "relative" }}>
            <source src="http://media.w3.org/2010/05/sintel/trailer.mp4"></source>
        </VideoPlayer>
    )
}

export default Video;