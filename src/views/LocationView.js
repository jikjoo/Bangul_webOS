/* global  */
import React from 'react';
import BtnGoMain from '../components/Common/BtnGoMain'
import BoxPanel from '../components/Common/BoxPanel';
import { BoxHeader } from '../components/Common';
import {KakaoMap} from '../components/Location';

const LocationView = (props) => {
    
    return (
        <BoxPanel>
            <BoxHeader title="위치 정보" />
            <KakaoMap/>
        </BoxPanel>
    )
}
export default LocationView;
