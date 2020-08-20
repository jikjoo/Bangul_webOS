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

export const SET_MY_IP = 'SET_MY_IP';
export const setMyIP = (ip) => {
	return {
		type : SET_MY_IP,
		ip
	}
}

export const sendConnectInternet = () => dispatch => {
	return axios.get('https://www.cloudflare.com/cdn-cgi/trace')
		.then(res => {
			const { data } = res;
			const substr = data.match(/ip=.*/g)[0]
			const ip = substr.replace('ip=', '')
			dispatch(setMyIP(ip));
		})
		.catch(err => {
			console.log(err)
			dispatch(setMyIP(null))
		})
}