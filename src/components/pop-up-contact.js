import styled, { keyframes } from 'styled-components';

const phoneRinging = keyframes`
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

const PopUpContact = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-content: center;
	& > * {
		display: block;
		width: 100%;
	}
	& > img {
		width: 100px;
		height: 100px;
		margin-bottom: 15px;
	}
	&.calling {
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
				animation: ${phoneRinging} 1s infinite linear;
			}
		}
	}
	h2, h3 {
		margin: 0 0 10px;
		font-weight: normal;
		text-align: center;
	}
	button {
		margin-top: 15px;
	}
`;

export default PopUpContact;