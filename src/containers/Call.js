import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import PopUp from '../components/pop-up';
import PopUpContact from '../components/pop-up-contact';
import Button from '../components/button';

import phone from '../img/067-phone.svg';
import cross from '../img/272-cross.svg';

@inject('CallStore')
@observer
export default class Call extends Component {

	manageCall() {
		let clStore = this.props.CallStore;
		if (!clStore.activeCall.calling) {
			clStore.performCall();
		} else {
			clStore.stopCall();
		}
	}

	getContact() {
		let clStore = this.props.CallStore;
		let status = null;
		if (clStore.activeCall.calling) {
			status = <div>Outgoing call to {clStore.activeCall.name}</div>;
		}
		return (
			<PopUpContact className={clStore.activeCall.calling ? 'popup-contact calling' : 'popup-contact'}>
				{clStore.activeCall.icon ? 
					(<img src={clStore.activeCall.icon} alt={clStore.activeCall.name}/>) :
					null
				}
				{clStore.activeCall.name ? 
					(<h2>{clStore.activeCall.name}</h2>) :
					null
				}
				{clStore.activeCall.name ? 
					(<h3>{clStore.activeCall.number}</h3>) :
					(<h2>{clStore.activeCall.number}</h2>)
				}
				{status}
				<Button className="call" onClick={() => this.manageCall()}>
					<img src={phone} alt="call" />
				</Button>
				<Button className="cancel" onClick={() => clStore.unloadActiveCall()}>
					<img src={cross} alt="call" />
				</Button>
			</PopUpContact>
		);
	}

	render() {
		let clStore = this.props.CallStore;
		return (
			<PopUp className={clStore.activeCall.active ? 'active' : ''}>
				<div>{this.getContact()}</div>
			</PopUp>
		);
	}

}