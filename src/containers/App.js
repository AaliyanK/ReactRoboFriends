import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
// import { robots } from './robots';
import Scroll from '../components/Scroll'
import './App.css';

// Mounting - when refresh is hit, App will get mounted to index.js, lifecycle hooks are hit (constructor)
// Updating - whenever a component is changed, lifecycle hook - render/componentDidMount is hit
// Unmounting - When component is moved from the page

// Parent sends STATE, child recieves it as a prop


class App extends React.Component {
    // Add state:
    constructor() {
        super()
        this.state = {
            // These are things that can change:
            robots: [],
            searchfield: ''
            // Pass these down to props to components
        }
    }

    componentDidMount() {
        // As soon as page is hit, this will happen
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users=>{
            this.setState({ robots: users });
        })
        
    }

    onSearchChange = (event) => {
        // To make sure state changes based on searchfield
        this.setState({ searchfield: event.target.value })
    }

    render() {
        // To destructure and stop using this.state everywhere
        const { robots, searchfield } = this.state;
        // filter the state robots if it includes the searchfield (true is returned)
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // Return loading if robots are taking a while
        if (robots.length === 0) {
            return <h1>Loading</h1>
        } else{
            return(
                // Return one single parent (div)
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    {/* Searchbox and cardlist need to communicate */}
                    {/* Needs to send info from searchbox to the parent */}
                    {/* Can use function "onSearchChange" in Searchbox.js*/}
                    <Searchbox searchChange={this.onSearchChange}/>
                    {/* Scroll is parent, renders its children */}
                    <Scroll>
                        {/* Cardlist reads props and renders - props are constant*/}
                        {/* Take it from constructor */}
                        <CardList robots = { filteredRobots }/>
                    </Scroll>
                </div>);}
    }
}

export default App