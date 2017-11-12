import styled from 'styled-components';

const Contact = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	cursor: pointer;
	&:hover {
		background-color: #eee;
	}
	img {
		display: inline-block;
		width: 60px;
		height: 60px;
		margin: 10px;
	}
	img.contacts-call {
		width: 20px;
		height: 20px;
		margin: 25px;
		transform: scaleX(-1);
	}
	.contacts-info {
		display: inline-flex;
		align-items: center;
		align-content: center;
		flex-wrap: wrap;
		width: calc(100% - 100px);
		& > * {
			width: 100%;
		}
	}
`;

export default Contact;