import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import { Provider } from 'mobx-react';

import ThemeStore from './stores/ThemeStore';
import DashboardStore from './stores/DashboardStore';
import ContactStore from './stores/ContactStore';
import CallStore from './stores/CallStore';

import Layout from './containers/Layout';

import globalStyles from './global-styles';


injectGlobal([globalStyles]);

ReactDOM.render((
	<BrowserRouter>
		<Provider
			ThemeStore={ThemeStore}
			DashboardStore={DashboardStore}
			ContactStore={ContactStore}
			CallStore={CallStore}
		>
			<Layout />
		</Provider>
	</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
