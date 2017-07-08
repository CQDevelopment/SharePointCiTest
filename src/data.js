let $ = require('jquery')

class Data {
	constructor() {

	}

	getSearchResults(query, callback) {
		let request = {
			request: {
				Querytext: query,
				RowsPerPage: '10'
			}
		};

		$.ajax({
			url: '/_api/search/postquery',
			type: 'POST',
			headers: {
				'Accept': 'application/json; odata=verbose',
				'X-RequestDigest': $('#__REQUESTDIGEST').val()
			},
			data: JSON.stringify(request),
			cache: false,
			contentType: 'application/json',
			success: (data) => {
				let relevantResults = data.d.postquery.PrimaryQueryResult.RelevantResults;

				let response = {
					count: relevantResults.RowCount,
					totalCount: relevantResults.TotalRows,
					results: []
				};

				relevantResults.Table.Rows.results.forEach(
					(rawResult) => {
						let result = {};

						rawResult.Cells.results.forEach(
							(cell) => {
								result[cell.Key] = cell.Value;
							})

						response.results.push(result);
					});

				callback(response);
			},
			error: (data) => {
				debugger
			}
		});
	}
}

let instance = new Data();

export {
	instance as data
}