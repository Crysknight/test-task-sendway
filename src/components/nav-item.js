import styled from 'styled-components';

const NavItem = styled.li`
	height: 100%;
	position: relative;
	list-style-type: none;
	&.call {
		display: flex;
		height: auto;
		align-self: flex-start;
		background-color: ${props => props.theme.mainColorPale}
	}
`;

export default NavItem;