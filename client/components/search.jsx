import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
		this.search = this.search.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			term: e.target.value,
		});
	}

	search() {
		this.props.onSearch(this.state.term);
	}

	render() {
		return (
			<div>
				Enter event name: <input value={this.state.terms} onChange={this.onChange} />
				<button onClick={this.search}> Search </button>
			</div>
		);
	}
}

export default Search;
