import React from 'react'
import ReactDOM from 'react-dom'

import Test from './components/testComponent.jsx'
import Search from './components/search.jsx'

import Data from './data.js'

export default class App {
	constructor(documentObject, jquery) {
		var self = this;

		self.document = documentObject;
		self.jquery = jquery;
		self.data = new Data(self.jquery);

		self.components = {};
		self.components.testComponent = Test;
		self.components.search = Search;

		self.process = () => {
			var elements = self.document.querySelectorAll('[data-cq]');

			elements.forEach((element) => {
				var config = eval('(' + element.attributes['data-cq'].value + ')');
				var component = self.components[config.name];

				ReactDOM.render(React.createElement(component, {
					data: self.data
				}), element);
			});
		};
	}
}