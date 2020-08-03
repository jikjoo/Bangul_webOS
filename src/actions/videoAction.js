import axios from '../api'

export const VIDEO_URL_HOME = 'VIDEO_URL/HOME';
export const VIDEO_URL_KENNEL = 'VIDEO_URL/KENNEL';

//connected with BtnCheck
export const videoURL = ({ target, url }) => {
    switch (target) {
        case 'home':
            return {
                type: VIDEO_URL_HOME,
                home: {
                    url
                }
            }
        case 'kennel':
            return {
                type: VIDEO_URL_KENNEL,
                kennel: {
                    url
                }
            }
        default:
            return {
                type: 'ERROR_from_check'
            };
    }
}
// async action
export const sendVideoURL = target => dispatch => {
    return axios.get(`${target}/url`)
        .then(res => {
            //console.log(res)
            const url = res.data.msg
            dispatch(videoURL({ target, url }))
        })
        .catch(err => {
            console.log(err)
            dispatch(videoURL({ target, url: err }))
        })
}
