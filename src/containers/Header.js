import React, { Component } from 'react';

import Dashboard from '../containers/Dashboard';

import Section from '../components/section';
import Logo from '../components/logo';

export default class Header extends Component {

	render() {
		return (
			<Section>
				<Logo>Sendway Test Task</Logo>
				<Dashboard />
			</Section>
		);
	}

}