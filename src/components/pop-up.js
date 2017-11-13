import styled from 'styled-components';

const PopUp = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -10;
	opacity: 0;
	background-color: rgba(0, 0, 0, 0.5);
	transition: all 0.3s;
	&.active {
		z-index: 60;
		opacity: 1;
		button {
			opacity: 1;
		}
	}
	& > * {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		width: 300px;
		height: 300px;
		padding: 15px;
		border: 1px solid #ddd;
		border-radius: 4px;
		background-color: #fff;
	}
	button {
		opacity: 0;
	}
`;

export default PopUp;