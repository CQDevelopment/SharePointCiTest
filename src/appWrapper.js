require('./style.scss')

import App from './app.js'

window.cq = window.cq || {};

window.cq.app = new App(window.document);
window.cq.app.process();