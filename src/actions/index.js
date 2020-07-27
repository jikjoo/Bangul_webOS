export {CONNECT_SERVER,sendConnect,connectServer} from './connectAction';
export {CHECK_CONNECT_HOME,CHECK_CONNECT_KENNEL,checkConnect,sendCheckConnect} from './checkAction';

export const navigate = (path) => {
	return {
		type: 'NAVIGATE',
		path
	};
};
