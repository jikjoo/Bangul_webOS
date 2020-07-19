//import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import { Panels } from '@enact/moonstone/Panels';
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

//const RoutablePanels = Routable({ navigate: 'onBack' }, Panels);

const App = (props) => (
	<Router>
		<Switch>
			<Route exact path="/" component={MainView} />
			<Route path="/home" component={HomeView} />
			<Route path="/kennel" component={KennelView} />
		</Switch>
	</Router>
);
export default MoonstoneDecorator(
	App);
	//AppStateDecorator(App));
