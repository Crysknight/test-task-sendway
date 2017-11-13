import styled from 'styled-components';

const BodyContainer = styled.div`
	display: flex;
	height: calc(100vh - 64px);
	& > div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 85%;
		& > img {
			width: 200px;
			height: 200px;
			opacity: 0.3;
		}
	}
`;

export default BodyContainer;