import styled from 'styled-components';

const MainMenu = styled.ul`
	width: 15%;
	margin: 0;
	padding: 0;
	background-color: ${props => props.theme.mainColorTransp(0.95)};
	li {
		display: flex;
		align-items: center;
		width: 100%;
		height: 50px;
		list-style-type: none;
		border-top: 1px solid transparent;
		border-top: 1px solid transparent;
		background-color: ${props => props.theme.mainColorPale};
		a {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100%;
			padding-left: 15px;
			color: #222;
			text-decoration: none;
			&:hover {
				color: #222;
				text-decoration: none;
				background-color: #fff;
			}
		}
	}
`;

export default MainMenu;