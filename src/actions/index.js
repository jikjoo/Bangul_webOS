export const navigate = (path) => {
	return {
		type: 'NAVIGATE',
		path
	};
};

export const get = (url) => {
	return{
		type: 'GET',
		url
	}
}