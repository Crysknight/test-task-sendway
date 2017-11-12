import styled from 'styled-components';

import NavItem from './nav-item';

const Keyboard = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-height: 0px;
	width: 100%;
	transition: all 0.3s;
	overflow: hidden;
	opacity: 0;
	&.opened {
		max-height: 275px;
		margin: 20px 0;
		opacity: 1;
	}
	${NavItem}.closed & {
		max-height 0;
		margin: 0;
		opacity: 0;
	}
`;

export default Keyboard;