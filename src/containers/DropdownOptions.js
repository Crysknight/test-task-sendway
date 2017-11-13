import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ThemeList from '../components/theme-list';
import ThemeListLi from '../components/theme-list-li';


@inject('ThemeStore')
@inject('DashboardStore')
@observer
export default class DropdownOptions extends Component {

	getThemes() {
		let tStore = this.props.ThemeStore;
		return (
			<ThemeList>
				{tStore.themes.map((theme, index) => {
					return (
						<ThemeListLi 
							color={theme.mainColor} 
							key={index} 
							onClick={() => {
								this.props.DashboardStore.setActiveLink(false);
								tStore.setActiveTheme(theme.name);
							}}
						>
							{theme.name}
						</ThemeListLi>
					);
				})}
			</ThemeList>
		);
	}

	render() {
		return (
			<div>{this.getThemes()}</div>
		);
	}

}