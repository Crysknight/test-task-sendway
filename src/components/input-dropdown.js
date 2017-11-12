import styled from 'styled-components';

import NavItem from './nav-item';

const InputDropdown = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 370px;
	position: absolute;
	top: 100%;
	left: -70px;
	border: 1px solid #ddd;
	border-radius: 0 0 4px 4px;
	overflow: hidden;
	& > * {
		width: 100%;
	}
	${NavItem}.closed & {
		width: 0;
	}
`;

export default InputDropdown;