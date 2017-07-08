import ReactDOM from 'react-dom'

import Data from './data.js'
import Test from './components/testComponent.jsx'

export default class App {
	constructor(props) {
		this.components = {};
		this.components.testComponent = Test;

		this.render = function(name, target) {
			ReactDOM.render(this.components[name], document.getElementById(target));
		};
	}
}