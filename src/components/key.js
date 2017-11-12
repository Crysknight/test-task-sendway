import styled from 'styled-components';

const Key = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 0 0 31.333%;
	height: 40px;
	margin: 1%;
	border-radius: 5px;
	background-color: #fff;
	font-weight: bold;
	cursor: pointer;
	&.key-call {
		flex: 0 0 98%;
	}
	&.key-delete {
		margin-left: 67.666%;
	}
`;

export default Key;