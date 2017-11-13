import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Calls from './Calls';
import Messages from './Messages';
import Contacts from './Contacts';
import Wallet from './Wallet';
import Store from './Store';

import BodyContainer from '../components/body-container';
import MainMenu from '../components/main-menu';

export default class Body extends Component {

	render() {
		return (
			<BodyContainer>
				<MainMenu>
					<li><Link to="/">Calls</Link></li>
					<li><Link to="/messages">Messages</Link></li>
					<li><Link to="/contacts">Contacts</Link></li>
					<li><Link to="/wallet">Wallet</Link></li>
					<li><Link to="/store">Store</Link></li>
				</MainMenu>
				<Switch>
					<Route exact path="/" component={Calls} />
					<Route path="/messages" component={Messages} />
					<Route path="/contacts" component={Contacts} />
					<Route path="/wallet" component={Wallet} />
					<Route path="/store" component={Store} />
				</Switch>
			</BodyContainer>
		);
	}

}