import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ContactsList from '../components/contacts-list';

@inject('ContactStore')
@observer
export default class Contacts extends Component {

	getContacts() {
		return (
			<ContactsList>
				{this.props.ContactStore.contacts.map((contact, index) => {
					return (
						<li key={index}>
							<img src={contact.icon} alt={contact.name} />
							<div className="contacts-info">
								<h3>{contact.name}</h3>
								<div>{contact.formattedNumber}</div>
								<div>{contact.status}</div>
							</div>
						</li>
					);
				})}
			</ContactsList>
		);
	}

	render() {
		return (
			<div>{this.getContacts()}</div>
		);
	}

}