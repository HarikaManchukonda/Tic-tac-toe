import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore() {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer];
	const composedEnhancers = composeWithDevTools(...enhancers);

	const store = createStore(rootReducer, composedEnhancers);

	sagaMiddleware.run(rootSaga);

	return store;
}
