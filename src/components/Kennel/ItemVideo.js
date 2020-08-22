import React from 'react'

const ItemVideo = ({ children, className }) => {
    return (
        <div className={`item-video btn-video ${className}`}>
            {children}
        </div>
    )
}

export default ItemVideo;