import { observable, action } from 'mobx';

class CallStore {
	@observable activeCall = {
		active: false,
		name: null,
		number: null,
		icon: null,
		status: null,
		folded: false,
		timeout: null
	};
	@observable missedCalls = [];
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
		// Check, if there is a contact (or number) ready for dialing
		if (this.activeCall.number) {
			this.activeCall.status = 'dialing';
			// Mock no answer and recall
			let name = this.activeCall.name;
			let number = this.activeCall.number;
			let icon = this.activeCall.icon;
			setTimeout(() => {
				this.activeCall.status = 'no answer';
			}, 2000);
			setTimeout(() => {
				this.activeCall.active = true;
				this.activeCall.status = 'incoming';
				this.activeCall.name = name;
				this.activeCall.number = number;
				this.activeCall.icon = icon;
				this.activeCall.timeout = setTimeout(() => {
					this.stopCall();
					this.missedCalls.push({
						name,
						number,
						icon
					});
				}, 5000);
			}, 4000);
		}
	}
	@action stopCall = () => {
		this.activeCall.status = null;
	}
	@action answerCall = () => {
		clearTimeout(this.activeCall.timeout);
		this.activeCall.status = 'active';
	}
	@action foldCall = () => {
		this.activeCall.folded = !this.activeCall.folded;
	}
}

const callStore = new CallStore();

export default callStore;