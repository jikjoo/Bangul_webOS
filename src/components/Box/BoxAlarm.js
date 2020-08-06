import React, { useState } from 'react';
import Notfication from '@jikjoo/moonstone/Notification';
import text from '../../../resources/text.json'
import { Icon } from '../Common';
import Button from '@enact/ui/Button';

const BoxAlarm = ({ type, open, ...props }) => {
    const [on,onOn] = useState(true);
    return (
        <Notfication className={`box-alarm ${type}`}
            open={open&on} {...props} scrimType="none">
            <Icon icon="warning" />
            <span>  {text[type]}  </span>
            <Button className={'button btn-close'} onClick={()=>{onOn(false)}}>
                <Icon icon="close" />
            </Button>
        </Notfication>
    )
}

export default BoxAlarm;