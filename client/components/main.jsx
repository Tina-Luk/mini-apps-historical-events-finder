import React from 'react';
import Search from './search.jsx';
import Data from './data.jsx';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			term: '',
			start: 0,
			perPage: 10,
		};
		this.search = this.search.bind(this);
		this.handlePageClick = this.handlePageClick.bind(this);
	}

	search(term) {
		axios
			.get(`http://localhost:3000/events?q=${term}&_start=${this.state.start}&_end=${this.state.start + this.state.perPage}`)
			.then((response) => {
				this.setState({
					term: term,
					data: response.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handlePageClick(e) {
		const selectedPage = e.selected;
		const start = selectedPage * this.state.perPage;
		this.setState(
			{
				start: selectedPage,
			},
			() => {
				this.search(this.state.term);
			}
		);
	}

	render() {
		return (
			<div>
				<h1>Historical Events Finder</h1>
				<Search onSearch={this.search} />
				<Data data={this.state.data} />
				<ReactPaginate
					previousLabel={'prev'}
					nextLabel={'next'}
					breakLabel={'...'}
					breakClassName={'break-me'}
					pageCount={this.state.pageCount}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={this.handlePageClick}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'active'}
				/>
			</div>
		);
	}
}

export default Main;
