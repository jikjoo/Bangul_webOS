/* 
ACTION으로 부터 나온 결과를 state로 저장하는 곳
*/

import { combineReducers } from 'redux';
import {
	CONNECT_SERVER,
	CHECK_SET_HOME,
	CHECK_SET_KENNEL,
	VIDEO_URL_HOME,
	VIDEO_URL_KENNEL,
	CONNECT_INTERNET,
	SET_SOCKET_HOME,
	SET_SOCKET_KENNEL,
	LOADING_SET,
	CHECK_SET_LOCATION,
	LOCATION_SET,
	VIDEO_SET_AUDIO_ON,
	VIDEO_SET_TALK_ON,
	VIDEO_SET_VOMIT
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
		case CHECK_SET_HOME:
			return Object.assign({}, state, { home });
		case CHECK_SET_KENNEL:
			return Object.assign({}, state, { kennel });
		case CHECK_SET_LOCATION:
			return Object.assign({}, state, { location });
		default:
			return state;
	}
}

function video(state = {}, action) {
	const { home, kennel, talkOn, audioOn, vomit } = action;
	switch (action.type) {
		case VIDEO_URL_HOME:
			return Object.assign({}, state, { home });
		case VIDEO_URL_KENNEL:
			return Object.assign({}, state, { kennel });
		case SET_SOCKET_HOME:
			return Object.assign({}, state, { home });
		case SET_SOCKET_KENNEL:
			return Object.assign({}, state, { kennel });
		case VIDEO_SET_AUDIO_ON:
			return Object.assign({}, state, { audioOn });
		case VIDEO_SET_TALK_ON:
			return Object.assign({}, state, { talkOn });
		case VIDEO_SET_VOMIT:
			return Object.assign({}, state, { vomit });
		default:
			return state;
	}
}

function location(state = {}, action) {
	const { location } = action;
	switch (action.type) {
		case LOCATION_SET:
			return location
		default:
			return state;
	}
}


function loading(state = true, action) {
	const { loading } = action;
	switch (action.type) {
		case LOADING_SET:
			return loading
		default:
			return state;
	}
}


const rootReducer = combineReducers({
	connect,
	check,
	video,
	location,
	loading,
});

export { default as initialState } from './initalState'

export default rootReducer;
