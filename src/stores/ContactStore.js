import { observable, computed, action } from 'mobx';

import alex from '../img/alex.jpg';
import george from '../img/george.jpg';
import pat from '../img/pat.jpg';
import paul from '../img/paul.jpg';
import rob from '../img/rob.jpg';

const formatNumber = (number) => {
	let formattedNumber = number.split('');
	formattedNumber = `+${number[0]} `;
	formattedNumber += `(${number[1] + number[2] + number[3]}) `;
	formattedNumber += `${number[4] + number[5] + number[6]}-`;
	formattedNumber += `${number[7] + number[8]}-${number[9] + number[10]}`;
	return formattedNumber;
}

class ContactStore {
	@observable contacts = [
		{
			name: 'Alex Webster',
			number: '79996669966',
			icon: alex
		},
		{
			name: 'George Fisher',
			number: '79192553322',
			icon: george
		},
		{
			name: 'Pat O\'Brien',
			number: '79055555555',
			icon: pat
		},
		{
			name: 'Paul Mazurkiewicz',
			number: '79032223232',
			icon: paul
		},
		{
			name: 'Rob Barret',
			number: '79063133131',
			icon: rob
		}
	];
	@observable filter = '';
	@computed get filteredContacts() {
		// Filter by request
		let filteredContacts = this.contacts.filter((contact, index) => {
			let regExp = new RegExp(this.filter, 'i');
			let nameMatch = contact.name.match(regExp);
			let numberMatch = contact.number.match(regExp);
			contact.formattedNumber = formatNumber(contact.number);
			return (nameMatch || numberMatch);
		});
		// Filter first 4 not to have an overly large list
		return filteredContacts.filter((contact, index) => index < 4);
	}
	@action setFilter = (filter) => {
		filter = filter.replace(/(\+|\(|\)| |-)/g, '');
		filter = filter.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
		this.filter = filter;
	}
}

const contactStore = new ContactStore();
window.contactStore = contactStore;

export default contactStore;