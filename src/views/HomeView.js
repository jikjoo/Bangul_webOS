import Button from '@jikjoo/moonstone/Button';
import { Panel, Header } from '@jikjoo/moonstone/Panels';
import React from 'react';
import { BoxHeader,BoxPanel } from '../components/Box';

const HomeView = (props) => {
    return (
        <BoxPanel >
            <BoxHeader target="home" />
        </BoxPanel>
    )
}

export default HomeView;
