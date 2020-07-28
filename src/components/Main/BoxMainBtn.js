import React from 'react';
import BtnPush from './BtnPush';

const BoxMainBtn = (props) => {
    return (
        <div className={"box-main-btn"}>
            <BtnPush push="kennel" >스마트 켄넬</BtnPush>
            <BtnPush push="home" >스마트 홈</BtnPush>
            <BtnPush push="location" >위치 정보</BtnPush>
        </div>
    )
}

export default BoxMainBtn;