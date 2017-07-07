import assert from 'assert'
import app from './app.js'

var app_instance = new app();

describe('App', function() {
	describe('#doAddition', function() {
		it('should return 4 if passed 1 and 3', function() {
			assert.equal(4, app_instance.doAddition(1, 3));
		});
	});
});