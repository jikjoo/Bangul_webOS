import React, { useState } from 'react';
import Notfication from '@jikjoo/moonstone/Notification';
import text from '../../../resources/text.json'
import { Icon } from '../Common';
import Button from '@enact/ui/Button';
import { webosOn } from '../../actions';

const BoxAlarm = ({ type, open, ...props }) => {
    const [closed, onClose] = useState(false);
    /* useEffect(()=>{
        setTimeout(()=>{onClose(true)},2000)
    },[]) */
    /*eslint-disable no-console */
    console.log({type,open,webosOn});
    return (
        // webOS에서는 자체 알람 안뜨도록
        typeof webosOn ? null :
            <Notfication className={`box-alarm ${type}`}
                open={(open & !closed)} {...props} scrimType="none">
                <Icon icon="warning" />
                <span>  {text[type]}  </span>
                <Button className={'button btn-close'} onClick={() => { onClose(true) }}>
                    <Icon icon="close" />
                </Button>
            </Notfication>
    )
}

export default BoxAlarm;