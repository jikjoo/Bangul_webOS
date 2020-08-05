import React from 'react';
import Notfication from '@jikjoo/moonstone/Notification';
import text from '../../../resources/text.json'
import { Icon } from '../Common';

const BoxAlarm = ({ type, open, ...props }) => {
    return (
        <Notfication className={`box-alarm ${type}`}
            open={open} {...props} scrimType="none">
            <Icon icon="warning" />
            <span>  {text[type]}</span>
        </Notfication>
    )
}

export default BoxAlarm;