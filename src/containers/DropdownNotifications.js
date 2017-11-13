import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ThemeList from '../components/theme-list';
import NotificationsListLi from '../components/notifications-list-li';

@inject('CallStore')
@observer
export default class DropdownNotifications extends Component {

	getNotifications() {
		const clStore = this.props.CallStore;
		return (
			<ThemeList>
				{clStore.missedCalls.map((call, index) => {
					return (
						<NotificationsListLi key={index}>
							<div className="label">Missed call</div>
							<img src={call.icon} alt={call.name} />
							<p>{call.name}</p>
						</NotificationsListLi>
					);
				})}
				{clStore.missedCalls.length === 0 ? <p>Nothing new</p> : null}
			</ThemeList>
		);
	}

	render() {
		return (
			<div>{this.getNotifications()}</div>
		);
	}

}