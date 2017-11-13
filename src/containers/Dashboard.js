import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';


// Create elements styling

import Nav from '../components/nav';
import NavItem from '../components/nav-item';
import NavLink from '../components/nav-link';
import NavIcon from '../components/nav-icon';
import NavDropdown from '../components/nav-dropdown';

@inject('DashboardStore')
@inject('CallStore')
@observer
export default class Dashboard extends Component {

	render() {
		const dStore = this.props.DashboardStore;
		return (
			<Nav>
				{dStore.links.map((link, index) => {
					// Assign className based on link activity and optionalClass
					let className = link.optionalClass ? link.optionalClass : '';
					className += link.active ? ' opened' : ' closed';
					className = className.trim();
					if (
						link.name === 'notifications' &&
						this.props.CallStore.missedCalls.length > 0
					) className += ' got-notifications';
					return (
						<NavItem key={index} className={className}>
							<NavLink onClick={(e) => {
								e.stopPropagation();
								dStore.setActiveLink(link.name);
							}}>
								<NavIcon src={link.icon} alt={link.name} />
							</NavLink>
							<NavDropdown onClick={(e) => e.stopPropagation()}>
								{link.dropdown}
							</NavDropdown>
						</NavItem>
					);
				})}
			</Nav>
		);
	}

}