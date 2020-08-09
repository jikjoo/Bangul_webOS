import Button from '@jikjoo/moonstone/Button';
import BodyText from '@jikjoo/moonstone/BodyText';
import React from 'react';
import { BoxHeader, BoxPanel } from '../../components/Box';
import { VideoKennel } from '../../components/Kennel';

const FixView = (props) => {
    return (
        <BoxPanel>
            <BoxHeader target={"kennel"} sub="fix" />
            <VideoKennel sub>
                <BodyText>좌측 고정 확인</BodyText>
                <BodyText>우측 고정 확인</BodyText>
                <BodyText>강한 충격 감지</BodyText>
            </VideoKennel>

        </BoxPanel>
    );
}

export default FixView;