import styled from 'styled-components';

import NavItem from './nav-item';

const NavDropdown = styled.div`
	position: absolute;
	top: 105%;
	right: 0;
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
	${NavItem}.call & {
		display: flex;
		align-items: center;
		width: 0;
		position: relative;
		top: 0;
		padding: 0;
		border: 0;
		border-radius: 0;
		.switch-keys, .call {
			width: 44px;
			height: 64px;
			position: absolute;
			top: 0;
			right: 0;
			padding: 20px 10px;
			filter: invert(100%);
			cursor: pointer;
		}
		.call {
			right: 44px;
		}
	}
	${NavItem}.call.opened & {
		width: 300px;
		padding: 0 15px;
	}
	& > div {
		width: 100%;
	}
`;

export default NavDropdown;