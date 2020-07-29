import Button from '@jikjoo/moonstone/Button';
import { Panel, Header } from '@jikjoo/moonstone/Panels';
import React from 'react';
import BtnGoBack from '../../components/Common/BtnGoBack';
import { BoxHeader, BoxPanel } from '../../components/Common';

const TempView = (props) => {
    return (
        <BoxPanel>
            <BoxHeader title="온도 조절" />
        </BoxPanel>
    );
}

export default TempView;