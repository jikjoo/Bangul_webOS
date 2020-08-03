export { CONNECT_SERVER, sendConnect, connectServer } from './connectAction';
export { CHECK_CONNECT_HOME, CHECK_CONNECT_KENNEL, checkConnect, sendCheckConnect } from './checkAction';
export { VIDEO_URL_HOME, VIDEO_URL_KENNEL, sendVideoURL, videoURL } from './videoAction';

export const navigate = (path) => {
	return {
		type: 'NAVIGATE',
		path
	};
};
