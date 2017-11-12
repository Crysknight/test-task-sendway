import styled from 'styled-components';

const Input = styled.input`
	display: flex;
	align-items: center;
	width: 100%;
	height: 64px;
	border: none;
	outline: none;
	background-color: transparent;
	color: #fff;
	&:focus {
		outline: none;
	}
`;

export default Input;