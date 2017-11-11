import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import actions from '../actions';

import Store from '../Store';

//here be components

@observer
class Layout extends Component {

	// constructor(props) {
		// super(props);

	// }

	render() {
		return (
			<h1>{this.props.store.blame}</h1>
		);
	}

}

export default Layout;