import axios from '../api'
import sample from '../../resources/sample_dog.jpg';

export const VIDEO_URL_HOME = 'VIDEO_URL/HOME';
export const VIDEO_URL_KENNEL = 'VIDEO_URL/KENNEL';
export const SET_SOCKET_HOME = 'SET_SOCKET/HOME';
export const SET_SOCKET_KENNEL = 'SET_SOCKET_KENNEL';

// video URL 설정하기
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
// 서버에 video url 보내기
export const sendVideoURL = target => dispatch => {
    dispatch({type:`${target}/SEND_VIDEO_URL`})
    return axios.get(`${target}/url`)
        .then(res => {
            //console.log(res)
            const url = res.data.msg
            dispatch(videoURL({ target, url }))
        })
        .catch(err => {
            console.log(err)
            dispatch(videoURL({ target, url: sample }))
        })
}

// 소켓 설정인데, 현재 안쓰임
export const setSocket = ({ target, socket }) => {
    switch (target) {
        case 'home':
            return {
                type: SET_SOCKET_HOME,
                home: {
                    socket
                }
            }
        case 'kennel':
            return {
                type: VIDEO_URL_KENNEL,
                kennel: {
                    socket
                }
            }
        default:
            return {
                type: 'SOCKET_TARGET_ERROR'
            };
    }
}

export const sendSetSocket = () => (dispatch) => {
    
}