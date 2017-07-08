import React from 'react'

export default class TestComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="cq-comp">
				<p>Test component content. With an edit.</p>
			</div>
		);
	}
}