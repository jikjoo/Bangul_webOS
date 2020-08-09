import React from 'react';
import Button from '@jikjoo/moonstone/Button';
import { useHistory } from 'react-router-dom';
import { BtnVideo } from '../Button';
import text from '../../../resources/text.json';
import { Icon } from '../Common';
import './Kennel.less';

const BtnVideoPush = ({ target, sub, ...rest }) => {
    let history = useHistory();
    const onPush = (e) => {
        const push = `/${target}/${sub}`;
        history.push(push);
    }
    return (
        <BtnVideo onClick={onPush}>
            <div className={"icon-video"} ><Icon icon={sub} /></div>
            {text[sub]}
        </BtnVideo>
    )
}

export default BtnVideoPush;