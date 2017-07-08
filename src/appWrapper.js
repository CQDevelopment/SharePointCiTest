require('./style.scss')
let $ = require('jquery')

import App from './app.js'


window.$ = $;
window.cq = window.cq || {};

window.cq.app = new App(window.document, $);
window.cq.app.process();