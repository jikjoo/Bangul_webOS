import React from 'react';
import { GrHome, GrBriefcase, GrCompass } from 'react-icons/gr'
import { IoIosArrowBack } from 'react-icons/io'
/* 
search icon in https://react-icons.github.io/react-icons/
*/
const Icon = ({ icon, ...props }) => {
    const list = {
        home: <GrHome {...props} />,
        kennel: <GrBriefcase {...props} />,
        location: <GrCompass {...props} />,
        back : <IoIosArrowBack {...props} />
    }
    return (
        list[icon]
    )
}

export default Icon;