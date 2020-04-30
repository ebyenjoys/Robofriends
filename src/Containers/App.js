import React, {Component} from 'react';
import  Cardlist from '../Components/Cardlist';
// import {robots} from './robots';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';



class App extends Component {

    state = {
        robots: [],
        searchfield: ''
    }

    

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>{return response.json();})
            .then((robots) => {this.setState({robots:robots});})
        
    }


    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({searchfield:event.target.value});
    
    }

    render() {

        const {robots,searchfield} = this.state;

        const filteredRobots = robots.filter((robot) => {

            return  robot.name.toLowerCase().includes(searchfield.toLowerCase());
        }) 

        // console.log(filteredRobots);
        return (

            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox search={this.onSearchChange}/>
                <Scroll>
                <ErrorBoundary>
                    <Cardlist robots={filteredRobots}/>
                </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
    
}

export default App
