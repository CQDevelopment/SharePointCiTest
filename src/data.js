export default class Data {
	constructor(jquery) {
		let self = this;
		self.$ = jquery;
	}

	getSearchResults(query, callback) {
		let self = this;

		let request = {
			request: {
				Querytext: query,
				RowsPerPage: '10'
			}
		};

		self.$.ajax({
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
				let response = {
					count: 0,
					totalCount: 0,
					results: []
				};

				if (!data.d.postquery.PrimaryQueryResult) {
					callback(response);
					return;
				}

				let relevantResults = data.d.postquery.PrimaryQueryResult.RelevantResults;

				Object.assign(response, {
					count: relevantResults.RowCount,
					totalCount: relevantResults.TotalRows
				});

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