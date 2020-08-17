import React from 'react';
import Button from '@jikjoo/moonstone/Button';
import { useHistory } from 'react-router-dom';

const BtnGoMain = () => {
    let history = useHistory();
    return (
        <Button onClick={() => { history.replace("/") }}>메인화면으로</Button>
    )
}

export default BtnGoMain;