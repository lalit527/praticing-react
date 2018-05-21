import React, { Component } from 'react';

import Person from './Person/Person';

class persons extends Component{
  constructor(props) {
    super(props);
    console.log('[Persons] Inside constructor', props)
  }

  componentWillMount() {
    console.log('[Persons] Inside component will mount')
  }

  componentDidMount() {
    console.log('[Persons] Inside componentDidMount')
  }

  shouldComponentUpdate( nextProps, nextState ){
    console.log('[Persons] Inside componentshouldupdate', nextProps, nextState);
    return true;
  }
  
  componentWillUpdate( nextProps, nextState ) {
    console.log('[Persons] Inside Component will update');
  }

  componenetDidUpdate() {
    console.log('[Persons] Inside Component did update');
  }

  render() {
    return this.props.persons.map( (person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed( event, person.id )} />
    });
  }
} 

export default persons;