import Button from '@jikjoo/moonstone/Button';
import { Panel, Header } from '@jikjoo/moonstone/Panels';
import React from 'react';
import { BoxHeader, BoxPanel } from '../../components/Box';

const TempView = (props) => {
    return (
        <BoxPanel>
            <BoxHeader target={"kennel"} sub="temp"/>
        </BoxPanel>
    );
}

export default TempView;