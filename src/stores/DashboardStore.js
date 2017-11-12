import React from 'react';
import { observable, computed, action } from 'mobx';

import DropdownSearch from '../containers/DropdownSearch';
import DropdownCall from '../containers/DropdownCall';
import DropdownAccount from '../containers/DropdownAccount';
import DropdownOptions from '../containers/DropdownOptions';

import search from '../img/135-search.svg';
import phone from '../img/067-phone.svg';
import user from '../img/114-user.svg';
import cog from '../img/149-cog.svg';

class DashboardStore {
	@observable links = [
		{
			name: 'search',
			icon: search,
			active: false,
			dropdown: <DropdownSearch />,
			optionalClass: 'search'
		},
		{
			name: 'call',
			icon: phone,
			active: false,
			dropdown: <DropdownCall />
		},
		{
			name: 'account',
			icon: user,
			active: false,
			dropdown: <DropdownAccount />
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
	@computed get isSearchActive() {
		let search = this.links.filter(link => link.name === 'search')[0];
		return search.active;
	}
}

const dashboardStore = new DashboardStore();

export default dashboardStore;