import React from 'react';

class Data extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let list = this.props.data.map((e) => (
			<div className="event">
				<b>Date:</b> {e.date}
				<br />
				<b>Place:</b> {e.category2}
				<br />
				<b>Description:</b> {e.description}
				<br />
			</div>
		));
		return (
			<div>
				<p>{list}</p>
			</div>
		);
	}
}

export default Data;
