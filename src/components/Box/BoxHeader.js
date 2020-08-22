import React from 'react';
import { BtnGoBack } from '../Button';
import text from '../../../resources/text.json';

const BoxHeader = ({ target, sub }) => {
    return (
        <header className={'header'}>

            <BtnGoBack />
            <h1>{text[target]}</h1>
            {sub ? <h3>{text[sub]}</h3> : null}
        </header>
    )
}

export default BoxHeader;