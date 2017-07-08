import React from 'react'
import ReactDOM from 'react-dom'

import {
	data
} from './data.js'
import Test from './components/testComponent.jsx'

export default class App {
	constructor(documentObject) {
		var self = this;

		self.document = documentObject;

		self.components = {};
		self.components.testComponent = Test;

		self.process = () => {
			var elements = self.document.querySelectorAll('[data-cq]');

			elements.forEach((element) => {
				var config = eval('(' + element.attributes['data-cq'].value + ')');
				var component = self.components[config.name];

				ReactDOM.render(React.createElement(component), element);
			});
		};
	}
}