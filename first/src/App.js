import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Lalit', age:25 },
      { name: 'Pallabi', age:26 },
      { name: 'Lalit', age:25 },
      { name: 'Lalit', age:25 },
      { name: 'Lalit', age:25 }
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Person name={'Lalit'} age={25} />
      </div>
    );
  }
}

export default App;
