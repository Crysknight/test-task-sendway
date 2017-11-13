import styled from 'styled-components';

const NotificationsListLi = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 64px;
	position: relative;
	list-style-type: none;
	.label {
		position: absolute;
		top: 2px;
		right: 2px;
		font-size: 12px;
		color: #666;
	}
	img {
		width: 50px;
		height: 50px;
		margin-right: 20px;
	}
	p {
		margin-top: 30px;
	}
`;

export default NotificationsListLi;