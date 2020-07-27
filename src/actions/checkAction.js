import axios from '../api'

export const CHECK_CONNECT_HOME = 'CHECK_CONNECT/HOME';
export const CHECK_CONNECT_KENNEL = 'CHECK_CONNECT/KENNEL';

//connected with BtnCheck
export const checkConnect = ({ target,isOn, error }) => {
	switch (target) {
		case 'home':
			return {
				type: CHECK_CONNECT_HOME,
				home : {
					isOn,
					error
				}
			}
		case 'kennel':
			return {
				type : CHECK_CONNECT_KENNEL,
				kennel : {
					isOn,
					error
				}
			}
		default:
			return {
				type: 'ERROR_from_check'
			};
	}
}
// async action
export const sendCheckConnect = target => dispatch => {
	return axios.get(`${target}/check`)
		.then(res => {
			//console.log(res)
			if (res.status == 200) {
				dispatch(checkConnect({target, isOn: true, error: '' }))
			}
		})
		.catch(err => {
			console.log(err)
			dispatch(checkConnect({target, isOn:false,error:err.message}))
		})
}
