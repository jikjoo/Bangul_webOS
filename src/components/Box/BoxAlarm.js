import React, { useState, useEffect } from 'react';
import Notfication from '@jikjoo/moonstone/Notification';
import text from '../../../resources/text.json'
import { Icon } from '../Common';
import Button from '@enact/ui/Button';

const BoxAlarm = ({ type, open, ...props }) => {
    const [closed,onClose] = useState(false);
    /* useEffect(()=>{
        setTimeout(()=>{onClose(true)},2000)
    },[]) */
    return (
        <Notfication className={`box-alarm ${type}`}
            open={(open&!closed)?1:0} {...props} scrimType="none">
            <Icon icon="warning" />
            <span>  {text[type]}  </span>
            <Button className={'button btn-close'} onClick={()=>{onClose(true)}}>
                <Icon icon="close" />
            </Button>
        </Notfication>
    )
}

export default BoxAlarm;