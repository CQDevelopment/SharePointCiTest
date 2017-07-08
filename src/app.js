import React from 'react'
import ReactDOM from 'react-dom'

import Test from './components/testComponent.jsx'
import Search from './components/search.jsx'

import {
	data
} from './data.js'

export default class App {
	constructor(documentObject) {
		var self = this;

		self.document = documentObject;

		self.components = {};
		self.components.testComponent = Test;
		self.components.search = Search;

		self.process = () => {
			var elements = self.document.querySelectorAll('[data-cq]');

			elements.forEach((element) => {
				var config = eval('(' + element.attributes['data-cq'].value + ')');
				var component = self.components[config.name];

				ReactDOM.render(React.createElement(component, {
					data: data
				}), element);
			});
		};
	}
}