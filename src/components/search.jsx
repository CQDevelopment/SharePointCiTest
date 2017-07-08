import React from 'react'

export default class Search extends React.Component {
	constructor(props) {
		super(props);

		let self = this;

		self.timeout = null;

		self.state = {
			value: '',
			results: {
				results: []
			}
		};

		self.handleChange = self.handleChange.bind(self);

		self.processResults = function (data) {
			self.setState({results: data});
		}
	}

	handleChange(event) {
		clearTimeout(this.timeout);

		this.setState({value: event.target.value});
		
		this.timeout = setTimeout(() => {
			this.props.data.getSearchResults(this.state.value, this.processResults);
		}, 250);
	}

	render() {
		return (
			<div className="cq-comp cq-comp-search">
				<div className="cq-header">Search</div>
				<div className="cq-content">
					<div>
						<input type="text" value={this.state.value} onChange={this.handleChange} /> 
					</div>
					<div className="cq-comp-search-results">
						{
							this.state.results.results.map(
								(result, index) => {
									return <div key={index}>
										<a href={result.Path}>{result.Title}</a>
									</div>;
								}
							) 
						}
					</div>
				</div>
			</div>
		);
	}
} 