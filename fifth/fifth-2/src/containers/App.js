import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App] Inside constructor', props);
    // We can specify state here, but need to mention this
    this.state = {
      persons: [
        { id:1,  name: 'Lalit', age:25 },
        { id:2, name: 'Pallabi', age:26 },
        { id:3, name: 'Babu', age:25 },
        { id:4, name: 'Babui', age:27 },
        { id:5, name: 'Motu', age:28 }
      ],
      otherState: 'some other value',
      showPersons: false
    };
  }
  
  componentWillMount() {
    console.log('[App] Inside componentwillmount')
  }

  componentDidMount() {
    console.log('[App] Inside componentDidMount')
  }

  shouldComponentUpdate( nextProps, nextState ){
    console.log('[App] Inside componentshouldupdate', nextProps, nextState);
    return nextState.persons !== this.state.persons ||
          nextState.showPersons !== this.state.showPersons;
    // return true;
  }
  
  componentWillUpdate( nextProps, nextState ) {
    console.log('[App] Inside Component will update');
  }

  componenetDidUpdate() {
    console.log('[App] Inside Component did update');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    console.log('Here');
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }


  render() {
    let persons = null;
    if ( this.state.showPersons ) {
      persons = <Persons
      persons={this.state.persons}
      clicked={this.deletePersonHandler}
      changed={this.nameChangedHandler} />;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} />
      {persons}
      </div>
    );
  }
}

export default App;
