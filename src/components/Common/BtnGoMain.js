import React from 'react';
import Button from '@jikjoo/moonstone/Button';
import { useHistory } from 'react-router-dom';

const BtnGoMain = (props) => {
    let history = useHistory();
    return (
        <Button onClick={(e) => { history.replace("/") }}>메인화면으로</Button>
    )
}

export default BtnGoMain;