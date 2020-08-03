/* global  */
import Button from '@jikjoo/moonstone/Button';
import { Panel, Header } from '@jikjoo/moonstone/Panels';
import React from 'react';
import { BoxHeader, BoxPanel } from '../components/Box';
import { KakaoMap } from '../components/Location';

const LocationView = (props) => {

    return (
        <BoxPanel>
            <BoxHeader target="location" />
            <KakaoMap />
        </BoxPanel>
    )
}
export default LocationView;
