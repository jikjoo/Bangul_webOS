import React from 'react';
import Button from '@jikjoo/moonstone/Button';
import { useHistory } from 'react-router-dom';
import { Icon } from '../Common';

const BtnGoBack = (props) => {
    let history = useHistory();
    return (
        <Button className={'btn-go-back'} onClick={(e) => { history.goBack() }} >
            <Icon icon={'back'} >
            </Icon>
        </Button>
    )
}

export default BtnGoBack;