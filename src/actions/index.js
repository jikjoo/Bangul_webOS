export {
	CONNECT_SERVER, sendConnectServer, connectServer,
	connectInternet, CONNECT_INTERNET, sendConnectInternet,
	SET_MY_IP, setMyIP
} from './connectAction';
export {
	CHECK_CONNECT_HOME, CHECK_CONNECT_KENNEL, checkConnect, sendCheckConnect,
	CHECK_CONNECT_LOCATION
} from './checkAction';
export {
	VIDEO_URL_HOME, VIDEO_URL_KENNEL, sendVideoURL, videoURL,
	SET_SOCKET_HOME, SET_SOCKET_KENNEL, setSocket
} from './videoAction';
export {
	LOAD_NAVER_MAP, loadNaverMap, changeLoadMap, CHANGE_LOAD_MAP,
	getLoacation,
} from './locationAction';

/*
메인 화면 로딩 끄고 키기 
Main/Loading 이랑 연결됨
*/
export const SET_LOADING = 'SET_LOADING'
export const setLoading = (loading) => {
	return {
		type: SET_LOADING,
		loading
	}
}
