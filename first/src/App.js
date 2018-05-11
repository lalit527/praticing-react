import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Lalit', age:25 },
      { name: 'Pallabi', age:26 },
      { name: 'Babu', age:25 },
      { name: 'Babui', age:27 },
      { name: 'Motu', age:28 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 25 },
        { name: 'Pallabi', age:29 },
        { name: 'Babu', age:25 },
        { name: 'Babui', age:27 },
        { name: 'Motu', age:28 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Lalit', age: 28 },
        { name: 'Pallabi', age:30 },
        { name: event.target.value, age: 29 },
        { name: 'Babui', age:27 },
        { name: 'Motu', age:28 }
      ]
    } )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Lalit!!')}>
          Switch Name
        </button>
        <Person name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} 
          age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}>
          Is React The Best
        </Person>
        <Person name={this.state.persons[3].name} 
          age={this.state.persons[3].age} />
        <Person name={this.state.persons[4].name} 
          age={this.state.persons[4].age} />
      </div>
    );
  }
}

export default App;
