import styled, { keyframes } from 'styled-components';

const phoneRingingOut = keyframes`
	0% {
		transform: rotate(135deg);
	}
	25% {
		transform: rotate(110deg);
	}
	50% {
		transform: rotate(135deg);
	}
	75% {
		transform: rotate(160deg);
	}
	100% {
		transform: rotate(135deg);
	}
`;

const phoneRingingIn = keyframes`
	0% {
		transform: rotate(0deg);
	}
	25% {
		transform: rotate(-25deg);
	}
	50% {
		transform: rotate(0deg);
	}
	75% {
		transform: rotate(25deg);
	}
	100% {
		transform: rotate(0deg);
	}
`;

const PopUpContact = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-content: center;
	position: relative;
	& > * {
		display: block;
		width: 100%;
	}
	& > img {
		width: 100px;
		height: 100px;
		margin-bottom: 15px;
	}
	&.dialing, &.incoming, &.active {
		button.cancel {
			width: 0;
			margin-right: -220px;
			padding: 0;
			overflow: hidden;
			opacity: 0;
		}
		button.call {
			background-color: #d99;
			width: 50px;
			border-radius: 50%;
			img {
				transform: rotate(135deg);
				animation: ${phoneRingingOut} 1s infinite ease-in;
			}
		}
	}
	&.incoming {
		button.call {
			background-color: ${props => props.theme.mainColor};
			img {
				transform: rotate(0deg);
				animation: ${phoneRingingIn} 1s infinite ease-in;	
			}
		}
		button.cancel {
			background-color: #d99;
			width: 50px;
			border-radius: 50%;
			margin-right: 0;
			opacity: 1;
		}
	}
	&.active {
		button.call img {
			animation: none;
		}
	}
	h2, h3 {
		margin: 0 0 10px;
		font-weight: normal;
		text-align: center;
	}
	button {
		margin-top: 15px;
		&.fold {
			width: 30px;
			height: 30px;
			margin-top: 0;
			position: absolute;
			right: 0;
			top: 0;
			font-weight: bold;
		}
	}
`;

export default PopUpContact;