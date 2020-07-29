import React from 'react';
import { useHistory } from 'react-router-dom';
import BtnVideo from '../Common/BtnVideo';

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