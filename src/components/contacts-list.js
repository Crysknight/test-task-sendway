import styled from 'styled-components';

const ContactsList = styled.ul`
	align-self: flex-start;
	width: 100%;
	padding: 0;
	margin: 0;
	li {
		display: flex;
		justify-content: flex-start;
		height: 100px;
		padding: 7px;
		list-style-type: none;
		img {
			height: 75px;
			width: 75px;
			margin-right: 25px;
		}
		h3 {
			margin: 5px 0;
		}
	}
`;

export default ContactsList;