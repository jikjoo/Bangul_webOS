import axios from '../api'

export const CONNECT_SERVER = 'CONNECT_SERVER';
export const CONNECT_INTERNET = 'CONNECT_INTERNET';

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
	dispatch({type:"SEND_CONNECT_SERVER"})
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
		})
}

export const connectInternet = (internetOn) => {
	return {
		type: CONNECT_INTERNET,
		internetOn
	}
}
export const sendConnectInternet = () => dispatch => {
	dispatch({type:'SEND_CONNECT_INTERNET'})
	return axios.get('http://www.google.com', )
		.then(res => {
			//console.log(res)
			dispatch(connectInternet(true))
		})
		.catch(err => {
			console.log(err)
			dispatch(connectInternet(false))
		})
}