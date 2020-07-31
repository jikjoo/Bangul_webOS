import React from 'react';
import Button from '@jikjoo/moonstone/Button';
import { useHistory } from 'react-router-dom';

const BtnPush = ({ push, children, ...rest }) => {
    let history = useHistory();
    const onPush = (e) => {
        history.push(push)
    }
    return (
        <Button className={"button btn-push"} onClick={onPush}>
            {children}
        </Button>
    )
}

export default BtnPush;