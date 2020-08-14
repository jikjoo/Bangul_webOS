export {
	CONNECT_SERVER, sendConnectServer as sendConnect, connectServer,
	connectInternet, CONNECT_INTERNET, sendConnectInternet,
} from './connectAction';
export { CHECK_CONNECT_HOME, CHECK_CONNECT_KENNEL, checkConnect, sendCheckConnect } from './checkAction';
export {
	VIDEO_URL_HOME, VIDEO_URL_KENNEL, sendVideoURL, videoURL,
	SET_SOCKET_HOME,SET_SOCKET_KENNEL,setSocket
} from './videoAction';
export { LOAD_NAVER_MAP, loadNaverMap, changeLoadMap, CHANGE_LOAD_MAP } from './locationAction';

export const navigate = (path) => {
	return {
		type: 'NAVIGATE',
		path
	};
};
