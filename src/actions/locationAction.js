export const LOAD_KAKAO_MAP = 'LOAD_KAKAO_MAP';

export const CHANGE_LOAD_MAP = 'CHANGE_LOAD_MAP';

export const changeLoadMap = (isLoaded) => {
    return {
        type: CHANGE_LOAD_MAP,
        isLoaded
    }
}

export const loadNaverMap = params => dispatch => {
    const script = document.createElement('script');
    script.type = "text/javascript"
    script.async = true;
    script.src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=mda3e6eja3";
    document.head.appendChild(script);
    script.onload = () => {
        return dispatch(changeLoadMap(true))
    }
}