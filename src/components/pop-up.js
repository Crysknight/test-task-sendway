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
		.popup-contact > div {
			opacity: 1;
		}
	}
	&.folded {
		height: 64px;
		bottom: 0;
		top: auto;
		background-color: ${props => props.theme.mainColor};
		color: #fff;
		& > * {
			justify-content: flex-start;
			height: 64px;
			width: 100%;
			background-color: transparent;
			.popup-contact {
				width: 300px;
				height: 50px;
				button:not(.fold) {
					display: none;
				}
				div {
					display: none;
				}
				& > img {
					width: 50px;
					height: 50px;
				}
				h2, h3 {
					display: none;
				}
				button.fold {
					margin-top: 10px;
					transform: rotate(180deg);
					background-color: #fff;
					img {
						filter: none;
					}
				}
			}
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
	.popup-contact > div {
		opacity: 0;
	}
`;

export default PopUp;