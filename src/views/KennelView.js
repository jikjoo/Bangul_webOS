import Button from '@jikjoo/moonstone/Button';
import { Panel, Header } from '@jikjoo/moonstone/Panels';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { BoxHeader, BoxPanel } from '../components/Box';
import BtnVideoPush from '../components/Kennel/BtnVideoPush';
import VideoKennel from '../components/Kennel/VideoKennel';

const KennelView = (props) => {
    return (
        <BoxPanel>
            <BoxHeader target={"kennel"} />
            <VideoKennel>
                <BtnVideoPush target={"kennel"}sub={"video"}/>
                <BtnVideoPush target={"kennel"} sub={"fix"}/>
                <BtnVideoPush target={"kennel"}sub={"temp"}/>
                <BtnVideoPush target={"kennel"}sub={"lamp"}/>
            </VideoKennel>
        </BoxPanel>
    );
}

export default KennelView;
