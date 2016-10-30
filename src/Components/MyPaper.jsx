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
		this.converter = new showdown.Converter();
	}

	componentDidMount() {
		$(window).bind("postUpdate", function(event, title, body) {
			var html = this.converter.makeHtml(body);

			this.setState({
				body: html
			});
		}.bind(this));
	}

	render() {
		return (
			<Paper
				zDepth={1}
			>
				<div dangerouslySetInnerHTML={{__html: this.state.body}} />
			</Paper>
		);
	}
}

MyPaper.defaultprops = {
}