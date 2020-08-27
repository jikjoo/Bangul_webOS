import axios from '../api'
import { createToast } from './webosAction';

export const CONNECT_SERVER = 'CONNECT/SERVER';
export const CONNECT_INTERNET = 'CONNECT/INTERNET';

// connected with BtnConnect
export const connectServer = ({ serverOn, serverError }) => {
	return {
		type: CONNECT_SERVER,
		payload: {
			serverOn,
			serverError
		}
	}
}

// async action
export const sendConnectServer = () => dispatch => {
	dispatch({ type: "CONNECT/SEND/SERVER" })
	return axios.get('/server/hello/webos')
		.then(res => {
			//console.log(res)
			if (res.status === 200) {
				dispatch(connectServer({ serverOn: true, serverError: '' }))
			}
		})
		.catch(err => {
			console.log(err)
			dispatch(connectServer({ serverOn: false, serverError: err.message }))
			dispatch(createToast('server_not_connected'));
		})
}

export const connectInternet = (internetOn) => {
	return {
		type: CONNECT_INTERNET,
		internetOn
	}
}
export const sendConnectInternet = () => dispatch => {
	dispatch({ type: 'CONNECT/SEND/INTERNET' })
	return axios.get('http://www.google.com',)
		.then(res => {
			//console.log(res)
			dispatch(connectInternet(true))
		})
		.catch(err => {
			console.log(err)
			dispatch(connectInternet(false))
		})
}