//import kind from '@enact/core/kind';
import MoonstoneDecorator from '@jikjoo/moonstone/MoonstoneDecorator';
import React from 'react';
import {
	HashRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import MainView from '../views/MainView';
import HomeView from '../views/HomeView';
import KennelView from '../views/KennelView';

import  './App.less';
import LocationView from '../views/LocationView';


const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={MainView} />
			<Route path="/kennel" component={KennelView} />
			<Route path="/home" component={HomeView} />
			<Route path="/location" component={LocationView} />
		</Switch>
	</Router>
);
//import AppStateDecorator from './AppStateDecorator'
export default MoonstoneDecorator(
	App);
	//AppStateDecorator(App));
