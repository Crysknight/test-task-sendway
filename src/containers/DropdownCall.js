import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Input from '../components/input';
import InputDropdown from '../components/input-dropdown';
import Contact from '../components/contact';
import Keyboard from '../components/keyboard';
import Key from '../components/key';

import phone from '../img/067-phone.svg';
import calculator from '../img/065-calculator.svg';

const keys = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#' ];

@inject('DashboardStore')
@inject('ContactStore')
@inject('CallStore')
@observer
export default class DropdownCall extends Component {

	componentWillReact() {
		if (this.props.DashboardStore.isCallActive) {
			this.input.focus();
		}
	}

	setFilter() {
		this.props.ContactStore.setFilter(this.input.value);
	}

	setActiveCall(contact) {
		if (contact) {
			this.props.CallStore.setActiveCall(contact);
			this.props.DashboardStore.setActiveLink(false);
			return;
		}
		if (this.props.ContactStore.fullyMatched) {
			let contact = this.props.ContactStore.fullyMatched;
			this.props.CallStore.setActiveCall({
				name: contact.name,
				number: contact.formattedNumber,
				icon: contact.icon
			});
		} else {
			this.props.CallStore.setActiveCall({ number: this.input.value });
		}
		this.props.DashboardStore.setActiveLink(false);
	}

	switchKeyboard() {
		let keyboardClass = this.keyboard.className;
		if (keyboardClass.match(/opened/)) {
			keyboardClass = keyboardClass.replace(/ opened/, '');
		} else {
			keyboardClass += ' opened';
		}
		this.keyboard.className = keyboardClass;
	}

	getKeyboard() {
		// This is a keyboard which folds and unfolds by switchKeyboard method
		return (
			<Keyboard innerRef={keyboard => this.keyboard = keyboard}>
				<Key 
					className="key-delete"
					onClick={() => {
						this.input.value = this.input.value.replace(/.$/, '');
						this.setFilter();
					}}
				>{"<"}</Key>
				{keys.map((key, index) => {
					return (
						<Key key={index} onClick={(e) => { 
							this.input.value += e.target.innerText;
							this.setFilter();
						}}>
							{key}
						</Key>
					);
				})}
				<Key className="key-call" onClick={() => {
					if (this.input.value.length !== 0 && !this.input.value.match(/[^0123456789()-+#*]/)) {
						this.setActiveCall();
					}
				}}>Call</Key>
			</Keyboard>
		);
	}

	getCallIcon() {
		if (!this.input) return null;
		return this.input.value.length !== 0 &&
		!this.input.value.match(/[^0123456789()-+]/) ?
		(<img 
			className="call" 
			alt="call" 
			src={phone} 
			onClick={() => this.setActiveCall()}
		/>) : null
	}

	renderFilteredContacts() {
		return this.props.ContactStore.filteredContacts.map((contact, index) => {
			return (
				<Contact 
					key={index} 
					onClick={() => this.setActiveCall({ 
						name: contact.name,
						number: contact.formattedNumber,
						icon: contact.icon
					})}
				>
					<img src={contact.icon} alt={contact.name}/>
					<div className="contacts-info">
						<div>{contact.name}</div>
						<div>{contact.formattedNumber}</div>
					</div>
					<img className="contacts-call" alt="call" src={phone} />
				</Contact>
			);
		});
	}

	render() {
		const dStore = this.props.DashboardStore;
		return (
			<div>
				<Input 
					className={dStore.isCallActive ? 'focused' : ''} 
					innerRef={input => this.input = input}
					onChange={() => this.setFilter()}
					onKeyPress={(e) => {
						if (e.key === 'Enter' && this.getCallIcon() !== null) {
							this.setActiveCall()
						}
					}}
				/>
				<img 
					className="switch-keys"
					alt="switch to keyboard"
					src={calculator}
					onClick={() => this.switchKeyboard()}
				/>
				{this.getCallIcon()}
				{this.getKeyboard()}
				<InputDropdown>
					{this.renderFilteredContacts()}
				</InputDropdown>
			</div>
		);
	}

}