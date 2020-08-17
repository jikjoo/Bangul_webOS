/* 
Reducer를 모아서 state를 저장하는 곳
Redux-devtool 연결하기도 함
*/
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { initialState } from '../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk)),
);

if (module.hot) {
	// Enable Webpack hot module replacement for reducers
	module.hot.accept('../reducers', () => {
		const nextRootReducer = require('../reducers').default;

		store.replaceReducer(nextRootReducer);
	});
}

export default store
