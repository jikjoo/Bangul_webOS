import axios from '../api'

export const CONNECT_SERVER = 'CONNECT_SERVER';

// connected with BtnConnect
export const connectServer = ({ isOn, error }) => {
	return {
		type: CONNECT_SERVER,
		payload : {
			isOn,
			error
		}
	}
}

// async action
export const sendConnect = params => dispatch => {
	return axios.get('/server/hello/webos')
		.then(res => {
			//console.log(res)
			if (res.status == 200) {
				dispatch(connectServer({ isOn: true, error: '' }))
			}
		})
		.catch(err => {
			console.log(err)
			dispatch(connectServer({isOn:false,error:err.message}))
		})
}
