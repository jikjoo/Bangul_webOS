import { combineReducers } from 'redux';
import { CONNECT_SERVER, CHECK_CONNECT, CHECK_CONNECT_HOME, CHECK_CONNECT_KENNEL } from '../actions';
import axios from '../api';

function path(state = '/', action) {
	switch (action.type) {
		case 'NAVIGATE':
			return action.path;
		default:
			return state;
	}
}

function connect(state = '', action) {
	switch (action.type) {
		case CONNECT_SERVER:
			return Object.assign('', state, action.payload);
		default:
			return state;
	}

}
function check(state = '', action) {
	const {home,kennel} = action;
	switch (action.type) {
		case CHECK_CONNECT_HOME:
			return Object.assign({}, state, {home});
		case CHECK_CONNECT_KENNEL:
			return Object.assign({}, state, {kennel});
		default:
			return state;
	}

}

const rootReducer = combineReducers({
	path,
	connect,
	check
});

export const initialState = {
	connect: {
		isOn: false,
		error: ''
	},
	check: {
		home: {
			isOn: false,
			error: ''
		},
		kennel: {
			isOn: false,
			error: ''
		}
	}
}

export default rootReducer;
