import styled from 'styled-components';

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 125px;
	height: 50px;
	background-color: ${props => props.theme.mainColor};
	color: #fff;
	border: none;
	border-radius: 4px;
	outline: none;
	cursor: pointer;
	&:focus {
		outline: none;
	}
	&.cancel {
		background-color: #d99;
	}
	& > img {
		width: 20px;
		height: 20px;
		filter: invert(100%);
	}
`;

export default Button;