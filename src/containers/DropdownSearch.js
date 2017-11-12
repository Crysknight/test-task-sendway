import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

const Input = styled.input`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	background-color: transparent;
	color: #fff;
	&:focus {
		outline: none;
	}
`;

@inject('DashboardStore')
@observer
export default class DropdownSearch extends Component {

	componentWillReact() {
		if (this.props.DashboardStore.isSearchActive) {
			this.input.focus();
		}
	}

	render() {
		const dStore = this.props.DashboardStore;
		return (
			<Input className={dStore.isSearchActive ? 'focused' : ''} innerRef={input => {
				this.input = input;
			}}></Input>
		);
	}

}