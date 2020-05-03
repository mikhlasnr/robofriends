import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "../style/App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((responseJson) => this.setState({ robots: responseJson }));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    };

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.username
                .toLowerCase()
                .includes(this.state.searchField.toLowerCase());
        });
        if (this.state.robots.length === 0) {
            return (
                <div className="tc">
                    <h1>Loading</h1>
                </div>
            );
        } else {
            return (
                <div className="tc">
                    <h1 className="title">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
