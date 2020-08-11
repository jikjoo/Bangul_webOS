import Button from '@jikjoo/moonstone/Button';
import { Panel, Header } from '@jikjoo/moonstone/Panels';
import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import { BoxHeader, BoxPanel, BoxVideoBtn } from '../components/Box';
import BtnVideoPush from '../components/Kennel/BtnVideoPush';
import VideoKennel from '../components/Kennel/VideoKennel';
import FixView from './Kennel/FixView';
import LampView from './Kennel/LampView';
import TempView from './Kennel/TempView';
import VideoView from './Kennel/VideoView';

const KennelView = (props) => {
    const { path } = useRouteMatch()
    return (
        <BoxPanel>
            <BoxHeader target={"kennel"} />
            <VideoKennel>
                <Switch>
                    <Route exact path={path}>
                        <BoxVideoBtn>
                            <BtnVideoPush target={"kennel"} sub={"video"} />
                            <BtnVideoPush target={"kennel"} sub={"fix"} />
                            <BtnVideoPush target={"kennel"} sub={"temp"} />
                            <BtnVideoPush target={"kennel"} sub={"lamp"} />
                        </BoxVideoBtn>
                    </Route>
                    <Route path={`${path}/fix`} component={FixView} />
                    <Route path={`${path}/lamp`} component={LampView} />
                    <Route path={`${path}/temp`} component={TempView} />
                    <Route path={`${path}/video`} component={VideoView} />
                </Switch>
            </VideoKennel>

        </BoxPanel>
    );
}

export default KennelView;
