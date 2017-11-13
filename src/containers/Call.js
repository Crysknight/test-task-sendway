import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import PopUp from '../components/pop-up';
import PopUpContact from '../components/pop-up-contact';
import Button from '../components/button';

import phone from '../img/067-phone.svg';
import cross from '../img/272-cross.svg';
import circleDown from '../img/324-circle-down.svg';

@inject('CallStore')
@observer
export default class Call extends Component {

	manageCall() {
		let clStore = this.props.CallStore;
		if (clStore.activeCall.status === null) {
			clStore.performCall();
		} else if (clStore.activeCall.status === 'incoming') {
			clStore.answerCall();
		} else {
			clStore.stopCall();
		}
	}

	getContact() {
		let clStore = this.props.CallStore;
		let status = null;
		let className = 'popup-contact';
		let buttonFold = null;
		switch (clStore.activeCall.status) {
			case 'dialing': {
				className += ' dialing';
				status = <div>Outgoing call to {clStore.activeCall.name}</div>;
				break;
			}
			case 'no answer': {
				status = <div style={{ color: '#d99' }}>{clStore.activeCall.name} doesn't answer</div>;
				break;
			}
			case 'incoming': {
				className += ' incoming';
				status = <div>Incoming call from {clStore.activeCall.name}</div>;
				break;
			}
			case 'active': {
				className += ' active';
				buttonFold = (
					<Button className="fold" onClick={() => clStore.foldCall()}>
						<img src={circleDown} alt="fold" />
					</Button>
				);
				break;
			}
			default: {
				break;
			}
		}
		return (
			<PopUpContact className={className}>
				{buttonFold}
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
		let className = '';
		let clStore = this.props.CallStore;
		if (clStore.activeCall.active) className += 'active';
		if (clStore.activeCall.folded) className += ' folded';
		return (
			<PopUp className={className}>
				<div>{this.getContact()}</div>
			</PopUp>
		);
	}

}