require('./style.scss')

import App from './app.js'

window.cq = window.cq || {};

window.cq.app = new app(document);
window.cq.app.process();