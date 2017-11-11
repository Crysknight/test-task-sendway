import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import store from './Store';
import Layout from './containers/Layout';


ReactDOM.render((
	<Router>
		<Layout store={store} />
	</Router>
), document.getElementById('root'));
registerServiceWorker();
