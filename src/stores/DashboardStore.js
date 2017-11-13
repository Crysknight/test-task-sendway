import React from 'react';
import { observable, computed, action } from 'mobx';

import DropdownCall from '../containers/DropdownCall';
import DropdownAccount from '../containers/DropdownAccount';
import DropdownOptions from '../containers/DropdownOptions';
import DropdownNotifications from '../containers/DropdownNotifications';

import phone from '../img/067-phone.svg';
import user from '../img/114-user.svg';
import bell from '../img/082-bell.svg';
import cog from '../img/149-cog.svg';

class DashboardStore {
	@observable links = [
		{
			name: 'call',
			icon: phone,
			active: false,
			dropdown: <DropdownCall />,
			optionalClass: 'call'
		},
		{
			name: 'account',
			icon: user,
			active: false,
			dropdown: <DropdownAccount />
		},
		{
			name: 'notifications',
			icon: bell,
			active: false,
			dropdown: <DropdownNotifications />,
			optionalClass: 'notifications'
		},
		{
			name: 'options',
			icon: cog,
			active: false,
			dropdown: <DropdownOptions />
		}
	];
	@action setActiveLink = (name) => {
		this.links = this.links.map(link => {
			link.active = false;
			if (link.name === name) link.active = true;
			return link;
		});
	}
	@computed get isCallActive() {
		let call = this.links.filter(link => link.name === 'call')[0];
		return call.active;
	}
}

const dashboardStore = new DashboardStore();

export default dashboardStore;