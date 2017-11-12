import React, { Component } from 'react';
import styled from 'styled-components';

import Dashboard from '../containers/Dashboard';

const Section = styled.section`
	display: flex;
	justify-content: space-between;
	height: 64px;
	box-shadow: 0 2px 8px #ddd;
`;
const Logo = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 300px;
	margin: 0;
	font-family: 'SputnikDisplay';
	color: ${props => props.theme.mainColor};
`;


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