import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Game from './components/board';
import configureStore from './store';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Game />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
