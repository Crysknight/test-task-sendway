import { observable, computed, action } from 'mobx';

class ThemeStore {
	@observable themes = [
		{
			name: 'orange',
			active: true,
			mainColor: '#f99630',
			mainColorTransp: (opacity) => `rgba(249, 150, 48, ${opacity})`
		},
		{
			name: 'green',
			active: false,
			mainColor: '#6dc484',
			mainColorTransp: (opacity) => `rgba(109, 196, 132, ${opacity})`
		}
	];
	@computed get activeTheme() {
		return this.themes.filter(theme => theme.active)[0];
	}
	@action setActiveTheme = (name) => {
		this.themes = this.themes.map(theme => {
			console.dir(theme);
			theme.active = false;
			if (theme.name === name) theme.active = true;
			return theme;
		});
	}
}

const themeStore = new ThemeStore();
window.themeStore = themeStore;

export default themeStore;