import assert from 'assert'
import data from './data.js'

var data_instance = new data();

describe('App', function() {
	describe('#doAddition', function() {
		it('should return 4 if passed 1 and 3', function() {
			assert.equal(4, data_instance.doAddition(1, 3));
		});
	});
});