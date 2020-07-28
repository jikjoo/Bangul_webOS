import React from 'react';
import Button from '@enact/moonstone/Button';
import { useHistory } from 'react-router-dom';

const BtnGoBack = (props) => {
    let history = useHistory();
    return (
        <Button onClick={(e) => { history.goBack() }}>이전으로</Button>
    )
}

export default BtnGoBack;