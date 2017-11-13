import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import Call from './Call';
import Body from './Body';


@inject('ThemeStore')
@inject('DashboardStore')
@observer
class Layout extends Component {

	render() {
		return (
			<ThemeProvider theme={this.props.ThemeStore.activeTheme}>
				<div onClick={() => this.props.DashboardStore.setActiveLink(false)}>
					<Header />
					<Call />
					<Body />
				</div>
			</ThemeProvider>
		);
	}

}


export default Layout;