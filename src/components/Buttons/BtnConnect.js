import React, { useState } from 'react';
import ToggleButton from '@enact/moonstone/ToggleButton';
import axios from '../../api';

const BtnConnect = ({conn,...rest}) => {
    const [isConn, setConn] = useState(false);
    const [err,setError] = useState('');
    const txt = {
        home : '스마트 홈',
        server : '메인 서버',
        kenn : '스마트 켄넬'
    }
    const api = {
        server : '/server/hello/webos',
        home : '/home/check',
        kenn : '/kennel/check'
    }
    function handleClick(e) {
        e.preventDefault();
        axios.get(api[conn])
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