import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { ThemeProvider } from 'styled-components';

import Header from './Header';


@inject('ThemeStore')
@inject('DashboardStore')
@observer
class Layout extends Component {

	render() {
		return (
			<ThemeProvider theme={this.props.ThemeStore.activeTheme}>
				<div onClick={() => this.props.DashboardStore.setActiveLink(false)}>
					<Header />
				</div>
			</ThemeProvider>
		);
	}

}


export default Layout;