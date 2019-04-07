import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

		onSearchChange = (event) => {
			this.setState({ searchfield: event.target.value })
			console.log({ searchfield: event.target.value })
		}

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	
	return(
		<div className="tc">
			<h1>Robo-Friends</h1>
			<SearchBox searchCange={this.onSearchChange} />
			<CardList robots={filteredRobots} />
		</div>
		);
	}
}	


export default App;