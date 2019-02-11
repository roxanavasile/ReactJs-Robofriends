import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import Searchbox from '../components/Searchbox.js';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

class App extends Component {
   //we create the state
     constructor() {
          super()
          this.state = {
               robots: [],
               searchfield: ''
          }
     }

     componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
     }

     onSearchChange = (event) => {
          //a function name we created
          this.setState({searchfield: event.target.value})
          // after we get the input event we create a variable to communicate with the robots
     }

     render() {
        const {robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
           return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
//        if(robots.length === 0){
//           return <h1>Loading...</h1>
//        } else{
//           return (
//               <div className='tc'>
//                  <h1 className='f1'> Robofriends </h1>
//                  <Searchbox searchChange={this.onSearchChange}/>
//                  <Scroll>
//                     <CardList robots={filteredRobots}/>
//                  </Scroll>
//               </div>
//        }
      return !robots.length ?
         <h1> Loading </h1> :
            (
               <div className='tc'>
                  <h1 className='f1'> Robofriends </h1>
                  <Searchbox searchChange={this.onSearchChange}/>
                  <Scroll>
                     <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                     </ErrorBoundry>
                  </Scroll>
               </div>
            );
     }

}

export default App;
