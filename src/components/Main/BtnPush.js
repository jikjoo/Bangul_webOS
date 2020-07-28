import React from 'react';
import Button from '@enact/moonstone/Button';
import { useHistory } from 'react-router-dom';

const BtnPush = ({push,children,...rest}) => {
    let history = useHistory();
    return (
        <Button onClick={(e) => { history.push(push) }}>{children}</Button>
    )
}

export default BtnPush;