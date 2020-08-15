import { checkConnect } from "./checkAction";

export const LOAD_NAVER_MAP = 'LOAD_NAVER_MAP';

export const CHANGE_LOAD_MAP = 'CHANGE_LOAD_MAP';

export const changeLoadMap = (isLoaded) => {
    return {
        type: CHANGE_LOAD_MAP,
        isLoaded
    }
}

export const loadNaverMap = params => (dispatch, getState) => {
    const { check } = getState();
    if (!check.location.isOn) {
        const script = document.createElement('script');
        script.type = "text/javascript"
        script.async = true;
        script.src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=mda3e6eja3";
        document.head.appendChild(script);
        script.onload = () => {
            if (window.naver === undefined) {
                return dispatch(checkConnect({ target: 'location', isOn: false }))
            }
            else return dispatch(checkConnect({ target: 'location', isOn: true }))
        }
    }
}