import Button from '@jikjoo/moonstone/Button';
import { Panel, Header } from '@jikjoo/moonstone/Panels';
import React from 'react';
import { BoxHeader, BoxPanel } from '../../components/Box';
import { VideoKennel } from '../../components/Kennel';

const TempView = (props) => {
    return (
        <BoxPanel>
            <BoxHeader target={"kennel"} sub="temp" />
            <VideoKennel sub >

            </VideoKennel>
        </BoxPanel>
    );
}

export default TempView;