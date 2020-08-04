import React from 'react';
import { GrHome, GrBriefcase, GrCompass } from 'react-icons/gr'
import {
    IoIosArrowBack, IoIosVideocam, IoMdThermometer,
    IoMdBulb, IoIosConstruct
} from 'react-icons/io'
/* 
search icon in https://react-icons.github.io/react-icons/
*/
const Icon = ({ icon, ...props }) => {
    const list = {
        home: <GrHome {...props} />,
        kennel: <GrBriefcase {...props} />,
        location: <GrCompass {...props} />,
        back: <IoIosArrowBack {...props} />,
        fix: <IoIosConstruct {...props} />,
        lamp: <IoMdBulb {...props} />,
        temp: <IoMdThermometer {...props} />,
        video: <IoIosVideocam {...props} />
    }
    return (
        list[icon] ? list[icon] : null
    )
}

export default Icon;