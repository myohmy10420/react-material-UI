import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

import Paper from 'material-ui/Paper';
import $ from 'jquery';

export class MyPaper extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			body:""
		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<Paper
				zDepth={1}
			>
				{this.state.body}
				Hellp Paper
			</Paper>
		);
	}
}

MyPaper.defaultprops = {
}