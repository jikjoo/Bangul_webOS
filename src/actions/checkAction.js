import axios from '../api'
import { loadNaverMap } from './locationAction';

export const CHECK_SET_HOME = 'CHECK/SET/HOME';
export const CHECK_SET_KENNEL = 'CHECK/SET/KENNEL';
export const CHECK_SET_LOCATION = 'CHECK/SET/LOCATION';

//ed with BtnGoto
export const checkSet = ({ target, isOn, error }) => {
	switch (target) {
		case 'home':
			return {
				type: CHECK_SET_HOME,
				home: {
					isOn,
					error
				}
			}
		case 'kennel':
			return {
				type: CHECK_SET_KENNEL,
				kennel: {
					isOn,
					error
				}
			}
		case 'location':
			return {
				type: CHECK_SET_LOCATION,
				location: { isOn }
			}
		default:
			return {
				type: 'ERROR_from_check'
			};
	}
}
// async action
export const sendCheck = target => (dispatch) => {
	dispatch({ type: `CHECK/SEND_CHECK/${target}` })
	if (target === 'location') {
		dispatch(loadNaverMap())
	}
	else return axios.get(`${target}/check`)
		// 서버에 장치들 연결잘되어있는지 확인하기
		.then(res => {
			//console.log(res)
			if (res.status === 200) {
				dispatch(checkSet({ target, isOn: true, error: '' }))
			}
		})
		.catch(err => {
			//console.log(err)
			dispatch(checkSet({ target, isOn: false, error: err.message }))
		})
}
