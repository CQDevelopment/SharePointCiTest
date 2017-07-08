class MockDocument {
	constructor() {
		var self = this;

		self.querySelectorAll = function(query) {
			return [];
		}
	}
}

let mock_document = new MockDocument();

class MockJquery {
	constructor() {
		var self = this;
	}
}

let mock_jquery = new MockJquery();

export {
	mock_document,
	mock_jquery
}