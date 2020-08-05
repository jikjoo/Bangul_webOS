import React from 'react';
import { GrHome, GrBriefcase, GrCompass } from 'react-icons/gr'
import {
    IoIosArrowBack, IoIosVideocam, IoMdThermometer,
    IoMdBulb, IoIosConstruct, IoIosWarning
} from 'react-icons/io'
/* 
search icon in https://react-icons.github.io/react-icons/
*/

const list = {
    home: GrHome,
    kennel: GrBriefcase,
    location: GrCompass,
    back: IoIosArrowBack,
    fix: IoIosConstruct,
    lamp: IoMdBulb,
    temp: IoMdThermometer,
    video: IoIosVideocam,
    warning: IoIosWarning
}

const Icon = ({ icon, ...props }) => {
    const _Icon = list[icon];
    return (
        list[icon] ? <_Icon {...props} className={`icon icon-${icon}`} /> : null
    )
}

export default Icon;