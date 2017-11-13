import { observable, computed, action } from 'mobx';

class CallStore {
	@observable activeCall = {
		active: false,
		calling: false,
		name: null,
		number: null,
		icon: null,
		answer: null
	};
	@action setActiveCall = ({ name, number, icon }) => {
		this.activeCall.active = true;
		this.activeCall.name = name || null;
		this.activeCall.number = number;
		this.activeCall.icon = icon || null;
	}
	@action unloadActiveCall = () => {
		this.activeCall.active = false;
		this.activeCall.name = null;
		this.activeCall.number = null;
		this.activeCall.icon = null;
	}
	@action performCall = () => {
		// Check, if there is a contact (or number) ready for calling
		if (this.activeCall.number) {
			this.activeCall.calling = true;
		}
	}
	@action stopCall = () => {
		this.activeCall.calling = false;
	}
}

const callStore = new CallStore();

export default callStore;