import ReactDOM from 'react-dom'

import Data from './data.js'
import Test from './components/testComponent.jsx'

export default class App {
	constructor(props) {
		var self = this;

		self.components = {};
		self.components.testComponent = Test;

		var elements = document.querySelectorAll('[data-cq]');

		elements.forEach((element) => {
			var config = eval('(' + element.attributes['data-cq'].value + ')');
			var component = self.components[config.name];

			ReactDOM.render(component, element);
		});
	}
}