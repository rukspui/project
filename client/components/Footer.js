import React from 'react';

export default class Footer extends React.Component {
	constructor() {
		super();
		// un mic exemplu despre cum putem face styling dinamic
		this.state = {isOk: true};
	}
	render() {
		return (
			<div className={`footer ${this.state.isOk ? 'red' : 'green'}`}>
				<a href="https://github.com/sergiu-enasoaie/node-reacts" target="_blank">Link de git!</a>
			</div>
		);
	}
}