import React from 'react';
import { BoxHeader, BoxPanel } from '../components/Box';
import { NaverMap } from '../components/Location';

const LocationView = (props) => {

    return (
        <BoxPanel>
            <BoxHeader target="location" />
            <NaverMap />
        </BoxPanel>
    )
}
export default LocationView;
