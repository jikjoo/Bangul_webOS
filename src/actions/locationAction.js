export const LOAD_KAKAO_MAP = 'LOAD_KAKAO_MAP';

export const loadKakaoMap = () => {
    const script = document.createElement('script');
    script.type = "text/javascript"
    script.async = true;
    script.src = "http://dapi.kakao.com/v2/maps/sdk.js?appkey=aefdc433d657b3802f48149819d88496&libraries=services&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
        import('../../resources/KakaoNew.js')
    }
    return {
        type: LOAD_KAKAO_MAP,
        isLoaded : true
    }
}