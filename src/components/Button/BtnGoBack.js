import React from 'react';
import Button from '@enact/ui/Button';
import { useHistory } from 'react-router-dom';
import { Icon } from '../Common';

const BtnGoBack = () => {
    let history = useHistory();
    return (
        <Button className={'btn-go-back'} onClick={() => { history.goBack() }} >
            <Icon icon={'back'} />
        </Button >
    )
}

export default BtnGoBack;