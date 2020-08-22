import axios from '../api'
import { loadNaverMap } from './locationAction';

export const CHECK_CONNECT_HOME = 'CHECK_CONNECT/HOME';
export const CHECK_CONNECT_KENNEL = 'CHECK_CONNECT/KENNEL';
export const CHECK_CONNECT_LOCATION = 'CHECK_CONNECT/LOCATION';

//connected with BtnGoto
export const checkConnect = ({ target, isOn, error }) => {
	switch (target) {
		case 'home':
			return {
				type: CHECK_CONNECT_HOME,
				home: {
					isOn,
					error
				}
			}
		case 'kennel':
			return {
				type: CHECK_CONNECT_KENNEL,
				kennel: {
					isOn,
					error
				}
			}
		case 'location':
			return {
				type: CHECK_CONNECT_LOCATION,
				location: { isOn }
			}
		default:
			return {
				type: 'ERROR_from_check'
			};
	}
}
// async action
export const sendCheckConnect = target => (dispatch) => {
	dispatch({type:`${target}/SEND_CHECK_CONNECT`})
	if (target === 'location') {
		dispatch(loadNaverMap())
	}
	else return axios.get(`${target}/check`)
		// 서버에 장치들 연결잘되어있는지 확인하기
		.then(res => {
			//console.log(res)
			if (res.status === 200) {
				dispatch(checkConnect({ target, isOn: true, error: '' }))
			}
		})
		.catch(err => {
			console.log(err)
			dispatch(checkConnect({ target, isOn: false, error: err.message }))
		})
}
