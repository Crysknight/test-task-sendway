import styled from 'styled-components';

import NavLink from './nav-link';
import NavItem from './nav-item';

const NavIcon = styled.img`
	width: 20px;
	height: 20px;
	${NavLink}:hover &, ${NavItem}.opened & {
		filter: invert(100%);
	}
	${NavItem}.notifications.got-notifications & {
		filter: invert(100%);
	}
`;

export default NavIcon;