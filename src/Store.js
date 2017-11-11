import { autorun, observable } from 'mobx';

class Store {
	@observable blame = 'me';
	@observable howdy = [1, 3, 6, 3, 3, 5];
}

let store = new Store();
window.store = store;

export default store;