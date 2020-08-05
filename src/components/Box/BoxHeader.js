import React from 'react';
import { Header } from '@jikjoo/moonstone/Panels';
import { BtnGoBack, BtnGoMain } from '../Button';
import text from '../../../resources/text.json';
import { Icon } from '../Common';

const BoxHeader = ({ target,sub, ...props }) => {
    return (
        <header className={'header'}>

            <BtnGoBack />
            <h1>{text[target]}</h1>
            {sub?<h3>{text[sub]}</h3>:null}
        </header>
    )
}

export default BoxHeader;