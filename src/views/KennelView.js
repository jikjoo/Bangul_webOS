import React from 'react';
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom';
import { BoxHeader, BoxPanel, BoxVideoBtn } from '../components/Box';
import BtnVideoPush from '../components/Kennel/BtnVideoPush';
import VideoKennel from '../components/Kennel/VideoKennel';
import FixView from './Kennel/FixView';
import LampView from './Kennel/LampView';
import TempView from './Kennel/TempView';
import VideoView from './Kennel/VideoView';
import { ItemVideo, VomitCheck } from '../components/Kennel';
import { Icon } from '../components/Common';
import text from '../../resources/text.json';

const KennelView = () => {
    const { path } = useRouteMatch();
    const { location } = useHistory();
    const { pathname } = location;
    const sub = pathname.replace(`${path}/`, '');
    const subtext = text[sub];
    return (
        <BoxPanel>
            <BoxHeader sub={sub} target={"kennel"} />
            <VomitCheck />
            <VideoKennel>
                <BoxVideoBtn>

                    {subtext && <ItemVideo className="item-sub">
                        <Icon icon={sub} className="icon-in-video" />
                        {subtext}
                    </ItemVideo>}
                    <Switch >
                        <Route exact path={path}>
                            <BtnVideoPush target={"kennel"} sub={"video"} />
                            <BtnVideoPush target={"kennel"} sub={"fix"} />
                            <BtnVideoPush target={"kennel"} sub={"temp"} />
                            <BtnVideoPush target={"kennel"} sub={"lamp"} />
                        </Route>
                        <Route path={`${path}/fix`} component={FixView} />
                        <Route path={`${path}/lamp`} component={LampView} />
                        <Route path={`${path}/temp`} component={TempView} />
                        <Route path={`${path}/video`} component={VideoView} />
                    </Switch>
                </BoxVideoBtn>
            </VideoKennel>

        </BoxPanel>
    );
}

export default KennelView;
