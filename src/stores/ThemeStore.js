import { observable, computed, action } from 'mobx';

class ThemeStore {
	@observable themes = [
		{
			name: 'green',
			active: true,
			mainColor: '#6dc484',
			mainColorPale: '#8acf9c',
			mainColorTransp: (opacity) => `rgba(109, 196, 132, ${opacity})`
		},
		{
			name: 'orange',
			active: false,
			mainColor: '#f99630',
			mainColorPale: '#faab59',
			mainColorTransp: (opacity) => `rgba(249, 150, 48, ${opacity})`
		},
		{
			name: 'blue',
			active: false,
			mainColor: '#6d99c4',
			mainColorPale: '#b5cce1',
			mainColorTransp: (opacity) => `rgba(109, 153, 196, ${opacity})`
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