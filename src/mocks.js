class Document {
	constructor(){
		var self = this;

		self.querySelectorAll = function(query) {
			return [];
		}
	}
}

let instance = new Document();

export { instance as document }