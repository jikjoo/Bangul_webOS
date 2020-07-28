import React from 'react';
import Button from '@enact/moonstone/Button';
import { useHistory } from 'react-router-dom';

const BtnPush = ({push,children,...rest}) => {
    let history = useHistory();
    const onPush = (e) => {
        history.push(push)
    }
    return (
        <Button onClick={onPush}>{children}</Button>
    )
}

export default BtnPush;