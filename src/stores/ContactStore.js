import { observable, computed, action } from 'mobx';

import alex from '../img/alex.jpg';
import george from '../img/george.jpg';
import pat from '../img/pat.jpg';
import paul from '../img/paul.jpg';
import rob from '../img/rob.jpg';

const formatNumber = (number) => {
	let formattedNumber = '';
	number = number.split('');
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
			icon: alex,
			status: 'Currently working on the new Conquering Dystopia album. It\'ll gonna be a bomb!'
		},
		{
			name: 'George Fisher',
			number: '79192553322',
			icon: george,
			status: 'They always ask me about my neck, not about what I am feeling'
		},
		{
			name: 'Pat O\'Brien',
			number: '79055555555',
			icon: pat,
			status: 'Just another grim solo to make up - and I can call it a day'
		},
		{
			name: 'Paul Mazurkiewicz',
			number: '79032223232',
			icon: paul,
			status: '1/4 1/4 1/4 1/3 1/4 1/4 1/3 1/3 1/4 1/4 1/4 1/4...'
		},
		{
			name: 'Rob Barret',
			number: '79063133131',
			icon: rob,
			status: 'I just enjoy it being a member of Cannibal Corpse'
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
	// Get a contact which as fully matched by number with filter by number
	@computed get fullyMatched() {
		for (let contact of this.contacts) {
			if (contact.number === this.filter) {
				return contact;
			}
		}
		return null;
	}
	// In filter we replace symbols +()- and whitespace to match the pure phone number
	// and also we clear it from all the symbols that can mess up the regexp
	@action setFilter = (filter) => {
		filter = filter.replace(/(\+|\(|\)| |-)/g, '');
		filter = filter.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
		filter = filter.replace(/^8/, '7');
		this.filter = filter;
	}
}

const contactStore = new ContactStore();
window.contactStore = contactStore;

export default contactStore;