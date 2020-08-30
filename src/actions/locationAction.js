import { checkSet } from "./checkAction";
import axios from '../api'

export const LOAD_NAVER_MAP = 'LOCATION/LOAD_NAVER_MAP';
export const CHANGE_LOAD_MAP = 'LOCATION/CHANGE_LOAD_MAP';
export const LOCATION_SET = 'LOCATION/SET';

export const changeLoadMap = (isLoaded) => {
    return {
        type: CHANGE_LOAD_MAP,
        isLoaded
    }
}

// NaverMap이랑 연결됨, sendCheck에서도 실행됨
export const loadNaverMap = () => (dispatch, getState) => {
    dispatch({ type: LOAD_NAVER_MAP })
    const { check, connect } = getState();
    if (!check.location.isOn) {
        // head에 네이버 api 추가
        const script = document.createElement('script');
        script.type = "text/javascript"
        script.async = true;
        script.src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=mda3e6eja3";
        document.head.appendChild(script);
        script.onload = () => {
            if (window.naver === undefined) {
                return dispatch(checkSet({ target: 'location', isOn: false }))
            }
            else return dispatch(checkSet({ target: 'location', isOn: true }))
        }
    }
}

export const setLocation = (location) => {
    return {
        type: LOCATION_SET,
        location
    }
}

export const getLocation = () => (dispatch, getState) => {
    dispatch({ type: 'LOCATION/GET_LOCATION' })
    return axios.get('/location/geolocation')
        .then(res => {
            const { geoLocation } = res.data;
            dispatch(setLocation(geoLocation));
        })
        .catch(err => {
            throw err
        })

}
