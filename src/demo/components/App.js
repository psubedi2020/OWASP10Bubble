import React, { Component } from 'react';
import Nav from './Nav';
import d3 from 'd3';

module.exports = React.createClass ({
	render() {
		return (
			<div>
				<Nav />
				<h1>Relative Size of disasters caused by OWASP Ten Volunerbilities, as of 2017</h1>
				<h3>Visualization prepared by Prakash Subedi using React and D3 libraries.</h3> 
				{this.props.children}
				
				<h3>Ref: https://snyk.io/blog/owasp-top-10-breaches/</h3>
			</div>
		)
	}
});
