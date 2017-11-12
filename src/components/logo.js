import styled from 'styled-components';

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

export default Logo;