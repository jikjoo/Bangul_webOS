/* 
ACTION으로 부터 나온 결과를 state로 저장하는 곳
*/

import { combineReducers } from 'redux';
import {
	CONNECT_SERVER,
	CHECK_CONNECT_HOME,
	CHECK_CONNECT_KENNEL,
	VIDEO_URL_HOME,
	VIDEO_URL_KENNEL,
	CONNECT_INTERNET
} from '../actions';
import axios from '../api';
import '../../resources/sample_dog.jpg';

function path(state = '/', action) {
	switch (action.type) {
		case 'NAVIGATE':
			return action.path;
		default:
			return state;
	}
}

function connect(state = {}, action) {
	switch (action.type) {
		case CONNECT_SERVER:
			return Object.assign({}, state, action.payload);
		case CONNECT_INTERNET:
			return Object.assign({},state,action.internetOn);
		default:
			return state;
	}
}

function check(state = '', action) {
	const { home, kennel } = action;
	switch (action.type) {
		case CHECK_CONNECT_HOME:
			return Object.assign({}, state, { home });
		case CHECK_CONNECT_KENNEL:
			return Object.assign({}, state, { kennel });
		default:
			return state;
	}
}

function video(state = {}, action) {
	const { home, kennel } = action;
	switch (action.type) {
		case VIDEO_URL_HOME:
			return Object.assign({}, state, { home });
		case VIDEO_URL_KENNEL:
			return Object.assign({}, state, { kennel });
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	path,
	connect,
	check,
	video
});

export const initialState = {
	connect: {
		serverOn: false,
		serverError: '',
		internetOn : false
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
	},
	video: {
		home: {
			url: '/resources/sample_dog.jpg'
		},
		kennel: {
			url: '/resources/sample_dog.jpg'
		}
	}
}

export default rootReducer;
