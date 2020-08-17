import React from 'react';
import { useHistory } from 'react-router-dom';
import { BtnVideo } from '../Button';
import text from '../../../resources/text.json';
import { Icon } from '../Common';
import './Kennel.less';

const BtnVideoPush = ({ target, sub }) => {
    let history = useHistory();
    const onPush = () => {
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