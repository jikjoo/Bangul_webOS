import React from 'react';
import { GrHome, GrBriefcase, GrCompass } from 'react-icons/gr'
import {
    IoIosArrowBack, IoIosVideocam, IoMdThermometer,
    IoMdBulb, IoIosConstruct, IoIosWarning, IoIosCloseCircleOutline
} from 'react-icons/io'
import './Common.less';
// search icon in https://react-icons.github.io/react-icons/

const list = {
    home: GrHome,
    kennel: GrBriefcase,
    location: GrCompass,
    back: IoIosArrowBack,
    fix: IoIosConstruct,
    lamp: IoMdBulb,
    temp: IoMdThermometer,
    video: IoIosVideocam,
    warning: IoIosWarning,
    close: IoIosCloseCircleOutline
}

const Icon = ({ icon, ...props }) => {
    const I = list[icon];
    return (
        list[icon] ? <I {...props} className={`icon icon-${icon}`} /> : null
    )
}

export default Icon;