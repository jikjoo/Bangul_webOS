import React, { useState } from 'react';
import ToggleButton from '@enact/moonstone/ToggleButton';
import Axios from 'axios';

const BtnConnect = ({conn,...rest}) => {
    const [isConn, setConn] = useState(false);
    const [err,setError] = useState('');
    const txt = {
        home : '스마트 홈',
        main : '메인 서버',
        kenn : '스마트 켄넬'
    }
    function handleClick(e) {
        e.preventDefault();
        Axios.get(`localhost:8080/${conn}/hello`)
            .then(res => {
                setConn(true)
            })
            .catch(err => {
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