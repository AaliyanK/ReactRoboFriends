import React, { useState, useEffect } from 'react';
// Usestate/effect are for hooks
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
// import { robots } from './robots';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

// Mounting - when refresh is hit, App will get mounted to index.js, lifecycle hooks are hit (constructor)
// Updating - whenever a component is changed, lifecycle hook - render/componentDidMount is hit
// Unmounting - When component is moved from the page

// Parent sends STATE, child recieves it as a prop

// Implementing Hooks:
// Use react without classes - constructors/super etc not needed, componentDidMount also can be replaced

function App() {
    // // Add state:
    // constructor() {
    //     super()
    //     this.state = {
    //         // These are things that can change:
    //         robots: [],
    //         searchfield: ''
    //         // Pass these down to props to components
    //     }
    // }

    // Declare state: the prop(robot) and the function that changes robot (setRobot)
    const [robots, setRobots] = useState([]) // Give it the initial value inside useState
    const [searchfield, setSearchField] = useState('')
    const [count,setCount] = useState(0)
    // componentDidMount() {
    //     // As soon as page is hit, this will happen
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(users=>{
    //         this.setState({ robots: users });
    //     })
    // }

    // Instead of componentDidMount: 
    useEffect(()=>{
        // As soon as page is hit, this will happen:
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users=>{
            setRobots(users);
        },[count]) // only run if count changes (a state)
    })

    const onSearchChange = (event) => {
        // To make sure state changes based on searchfield
        // Changed to hook:
        setSearchField(event.target.value)
    }

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
                <button onClick={()=>setCount(count+1)}>click me</button>

                {/* Searchbox and cardlist need to communicate */}
                {/* Needs to send info from searchbox to the parent */}
                {/* Can use function "onSearchChange" in Searchbox.js*/}
                <Searchbox searchChange={onSearchChange}/>
                {/* Scroll is parent, renders its children */}
                <Scroll>
                    <ErrorBoundary>
                        {/* Cardlist reads props and renders - props are constant*/}
                        {/* Take it from constructor */}
                        <CardList robots = { filteredRobots }/>
                    </ErrorBoundary>
                </Scroll>
            </div>);
            }
    }


export default App