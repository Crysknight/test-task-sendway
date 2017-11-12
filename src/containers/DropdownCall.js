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
@observer
export default class DropdownCall extends Component {

	componentWillReact() {
		if (this.props.DashboardStore.isCallActive) {
			this.input.focus();
		}
	}

	render() {
		const dStore = this.props.DashboardStore;
		const cStore = this.props.ContactStore;
		return (
			<div>
				<Input 
					className={dStore.isCallActive ? 'focused' : ''} 
					innerRef={input => {
						this.input = input;
					}}
					onChange={() => cStore.setFilter(this.input.value)}
				/>
				<img 
					className="switch-keys"
					alt="switch to keyboard"
					src={calculator}
					onClick={() => {
						let keyboardClass = this.keyboard.className;
						if (keyboardClass.match(/opened/)) {
							keyboardClass = keyboardClass.replace(/ opened/, '');
						} else {
							keyboardClass += ' opened';
						}
						this.keyboard.className = keyboardClass;
					}}
				/>
				<Keyboard innerRef={keyboard => this.keyboard = keyboard}>
					<Key 
						className="key-delete"
						onClick={() => {
							this.input.value = this.input.value.replace(/.$/, '');
							cStore.setFilter(this.input.value);
						}}
					>{"<"}</Key>
					{keys.map((key, index) => {
						return (
							<Key key={index} onClick={(e) => { 
								this.input.value += e.target.innerText;
								cStore.setFilter(this.input.value);
							}}>
								{key}
							</Key>
						);
					})}
					<Key className="key-call">Call</Key>
				</Keyboard>
				<InputDropdown>
					{cStore.filteredContacts.map((contact, index) => {
						return (
							<Contact key={index}>
								<img src={contact.icon} alt={contact.name}/>
								<div className="contacts-info">
									<div>{contact.name}</div>
									<div>{contact.formattedNumber}</div>
								</div>
								<img className="contacts-call" alt="call" src={phone} />
							</Contact>
						);
					})}
				</InputDropdown>
			</div>
		);
	}

}