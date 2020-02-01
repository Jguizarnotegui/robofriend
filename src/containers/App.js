import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

//STATE - the description of your app, an object that describes the application, the state can change the value of searchbox, robots

//App component with states for robots and search field
class App extends Component {
    constructor() {
        super();
        this.state = {//describes the app, renders and passes them down as props
            robots: [],
            searchfield: ''
        }
        //console.log('constructor');
    }
    //https://reactjs.org/docs/react-component.html
    componentDidMount() {
        //fetch is a method of the window ex: window.fetch()
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>  response.json())
            .then(users => this.setState({ robots: users }));
        //this.setState({ robots: robots});//everytime the state changes it reruns the render
        //console.log('componentDidMount');
    }
    //Anytime you create your own method in react use this syntax
    onSearchChange = (event) => {
        //to update state for the search field
        this.setState({searchfield: event.target.value});
    }
    render() {//filter the search to display matching robots
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        //instead of if else we can use trinary statement
        return !robots.length ?
            <h1>Loading</h1> :
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        //console.log('render');
    }
}

export default App;
