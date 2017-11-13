import styled from 'styled-components';

const ThemeListLi = styled.li`
	list-style-type: none;
	cursor: pointer;
	color: ${props => props.color};
`;

export default ThemeListLi;