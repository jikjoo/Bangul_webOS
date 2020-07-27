import { createStore } from 'redux';

import rootReducer from '../reducers';
const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	//initialState
);

if (module.hot) {
	// Enable Webpack hot module replacement for reducers
	module.hot.accept('../reducers', () => {
		const nextRootReducer = require('../reducers').default;

		store.replaceReducer(nextRootReducer);
	});
}

export default store
