import axios from '../api'
import sample from '../../resources/sample_dog.jpg';

export const VIDEO_URL_HOME = 'VIDEO/URL/HOME';
export const VIDEO_URL_KENNEL = 'VIDEO/URL/KENNEL';
export const SET_SOCKET_HOME = 'VIDEO/SET_SOCKET/HOME';
export const SET_SOCKET_KENNEL = 'VIDEO/SET_SOCKET_KENNEL';
export const VIDEO_SET_AUDIO_ON = 'VIDEO/SET_AUDIO_ON';
export const VIDEO_SET_TALK_ON = 'VIDEO/SET_TALK_ON';

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
    dispatch({ type: `VIDEO/SEND_VIDEO_URL/${target}` })
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
                type: 'VIDEO/SOCKET_TARGET_ERROR'
            };
    }
}

export const setAudioOn = (audioOn) => {
    return {
        type: VIDEO_SET_AUDIO_ON,
        audioOn
    }
}

export const setTalkOn = (talkOn) => {
    return {
        type: VIDEO_SET_TALK_ON,
        talkOn
    }
}

// 서버에 캡쳐 이미지 보내기
export const sendCapture = (capture) => dispatch => {
    dispatch({ type: `VIDEO/SEND_CAPTURE`, payload: capture })
    return axios.post(`kennel/getImage`, capture)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}