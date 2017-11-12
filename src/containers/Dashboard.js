import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';


// Create elements styling
const Nav = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	margin: 0 15px;
	padding: 0;
	margin-left: auto;
`;
const NavItem = styled.li`
	height: 100%;
	position: relative;
	list-style-type: none;
	&.search {
		display: flex;
	}
`;
const NavLink = styled.button`
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 25px;
	border: none;
	outline: none;
	background-color: transparent;
	color: #222;
	cursor: pointer;
	&:focus {
		outline: none;
	}
	&:hover, ${NavItem}.opened & {
		background-color: ${props => props.theme.mainColor}
	}
`;
const NavIcon = styled.img`
	width: 20px;
	height: 20px;
	${NavLink}:hover &, ${NavItem}.opened & {
		filter: invert(100%);
	}
`;
const NavDropdown = styled.div`
	position: absolute;
	top: 105%;
	padding: 15px;
	border: 1px solid #ddd;
	border-radius: 4px;
	opacity: 0;
	transition: all 0.3s;
	z-index: -100;
	${NavItem}.opened & {
		top: 100%;
		opacity: 1;
		z-index: 50;
	}
	${NavItem}.search & {
		display: flex;
		align-items: center;
		width: 0;
		position: relative;
		top: 0;
		padding: 0;
		border: 0;
		border-radius: 0;
		background-color: ${props => props.theme.mainColorTransp(0.8)}
	}
	${NavItem}.search.opened & {
		width: 300px;
		padding: 0 15px;
	}
`;

@inject('DashboardStore')
@observer
export default class Dashboard extends Component {

	render() {
		const dStore = this.props.DashboardStore;
		return (
			<Nav>
				{dStore.links.map((link, index) => {
					// Assign className based on link activity and optionalClass
					let className = link.optionalClass ? link.optionalClass : '';
					className += link.active ? ' opened' : ' closed';
					className = className.trim();
					return (
						<NavItem key={index} className={className}>
							<NavLink onClick={(e) => {
								e.stopPropagation();
								dStore.setActiveLink(link.name);
							}}>
								<NavIcon src={link.icon} alt={link.name} />
							</NavLink>
							<NavDropdown onClick={(e) => e.stopPropagation()}>
								{link.dropdown}
							</NavDropdown>
						</NavItem>
					);
				})}
			</Nav>
		);
	}

}