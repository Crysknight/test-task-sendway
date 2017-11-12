import styled from 'styled-components';

import NavItem from './nav-item';

const NavLink = styled.button`
	display: flex;
	align-items: center;
	height: 64px;
	padding: 0 25px;
	border: none;
	outline: none;
	background-color: #fff;
	color: #222;
	cursor: pointer;
	&:focus {
		outline: none;
	}
	&:hover, ${NavItem}.opened & {
		background-color: ${props => props.theme.mainColor}
	}
`;

export default NavLink;