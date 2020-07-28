//import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import PropTypes from 'prop-types';
import React from 'react';
import {
	HashRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import MainView from '../views/MainView';
import HomeView from '../views/HomeView';
import KennelView from '../views/KennelView';

import css from './App.module.less';
import LocationView from '../views/LocationView';
import FixView from '../views/Kennel/FixView';
import LampView from '../views/Kennel/LampView';
import TempView from '../views/Kennel/TempView';
import VideoView from '../views/Kennel/VideoView';


const App = (props) => (
	<Router>
		<Switch>
			<Route exact path="/" component={MainView} />
			<Route exact path="/kennel" component={KennelView} />
			<Route path="/home" component={HomeView} />
			<Route path="/location" component={LocationView} />
			<Route path="/kennel/fix" component={FixView} />
			<Route path="/kennel/lamp" component={LampView} />
			<Route path="/kennel/temp" component={TempView} />
			<Route path="/kennel/video" component={VideoView} />
		</Switch>
	</Router>
);
//import AppStateDecorator from './AppStateDecorator'
export default MoonstoneDecorator(
	App);
	//AppStateDecorator(App));
