import React, { useState } from 'react'
import { BtnVideo, Button } from '../Button'
import Input from '@jikjoo/moonstone/Input'
import { Icon } from '../Common'
import ItemVideo from './ItemVideo';
import './Kennel.less'

const BtnSetTemp = () => {
    const [temp, setTemp] = useState(27)
    const onClickUp = () => {
        setTemp(temp + 1);
    }
    const onClickDown = () => {
        setTemp(temp - 1);
    }
    return (
        <ItemVideo className={"btn-set-temp"}>
            설정온도<br />
            {`${temp}℃`}
            <Button className="button btn-arrow"
                onClick={onClickUp}>
                <Icon icon={'arrowUp'} className="" />
            </Button>
            <Button className="button btn-arrow"
                onClick={onClickDown}>
                <Icon icon={'arrowDown'} className="" />
            </Button>
        </ItemVideo>
    )
}

export default BtnSetTemp;