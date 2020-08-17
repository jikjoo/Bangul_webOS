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
	CONNECT_INTERNET,
	SET_SOCKET_HOME,
	SET_SOCKET_KENNEL,
	SET_LOADING,
	CHECK_CONNECT_LOCATION
} from '../actions';

function connect(state = {}, action) {
	switch (action.type) {
		case CONNECT_SERVER:
			return Object.assign({}, state, action.payload);
		case CONNECT_INTERNET:
			return Object.assign({}, state, action.internetOn);
		default:
			return state;
	}
}

function check(state = '', action) {
	const { home, kennel, location } = action;
	switch (action.type) {
		case CHECK_CONNECT_HOME:
			return Object.assign({}, state, { home });
		case CHECK_CONNECT_KENNEL:
			return Object.assign({}, state, { kennel });
		case CHECK_CONNECT_LOCATION:
			return Object.assign({}, state, { location });
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
		case SET_SOCKET_HOME:
			return Object.assign({}, state, { home });
		case SET_SOCKET_KENNEL:
			return Object.assign({}, state, { kennel });
		default:
			return state;
	}
}
/* 
function location(state = {}, action) {
	const { isLoaded } = action;
	switch (action.type) {
		case CHANGE_LOAD_MAP:
			return Object.assign({}, state, { isLoaded })
		default:
			return state;
	}
} */

function loading(state = true, action) {
	const { loading } = action;
	switch (action.type) {
		case SET_LOADING:
			return loading
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	connect,
	check,
	video,
	//location
	loading
});

/********* initalState *************/
export const initialState = {
	connect: {
		serverOn: false,
		serverError: '',
		//internetOn: true
	},
	check: {
		home: {
			isOn: false,
			error: ''
		},
		kennel: {
			isOn: false,
			error: ''
		},
		location: {
			isOn: false,
		}
	},
	video: {
		home: {
			url: '',
			socket: null
		},
		kennel: {
			url: '',
			socket: null
		}
	},
	/* location: {
		isLoaded: false
	} */
	loading: true
}

export default rootReducer;
