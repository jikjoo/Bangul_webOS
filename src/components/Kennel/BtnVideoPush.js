import React from 'react';
import Button from '@jikjoo/moonstone/Button';
import { useHistory } from 'react-router-dom';
import {BtnVideo} from '../Button';

const BtnVideoPush = ({push,children,...rest}) => {
    let history = useHistory();
    const onPush = (e) => {
        history.push(push)
    }
    return (
        <BtnVideo onClick={onPush}>{children}</BtnVideo>
    )
}

export default BtnVideoPush;