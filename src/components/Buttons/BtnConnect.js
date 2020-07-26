import React, { useState } from 'react';
import ToggleButton from '@enact/moonstone/ToggleButton';
import Axios from 'axios';
import config from '../../../resources/config.json';

const BtnConnect = ({conn,...rest}) => {
    const [isConn, setConn] = useState(false);
    const [err,setError] = useState('');
    const txt = {
        home : '스마트 홈',
        server : '메인 서버',
        kenn : '스마트 켄넬'
    }
    const {HOST, PORT} = config.SERVER;
    function handleClick(e) {
        e.preventDefault();
        Axios.get(`http://${HOST}:${PORT}/${conn}/hello`)
            .then(res => {
                console.log(res)
                setConn(true)
            })
            .catch(err => {
                console.log(err)
                setConn(false)
                setError(err)
            })
    }
    return (
        <div>
            <ToggleButton selected={isConn} onClick={handleClick}>
            {`${txt[conn]} 연결`}
            </ToggleButton>
            <span>
                {err.toString()}
            </span>

        </div>
    );
}

export default BtnConnect;