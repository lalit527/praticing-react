import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

// const Person = ( props ) => {
//   return (
//     <div className={classes.Person}>
//       <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   )
// }; 

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person] Inside constructor', props)
  }

  componentWillMount() {
    console.log('[Person] Inside component will mount')
  }

  componentDidMount() {
    console.log('[Person] Inside componentDidMount')
  }

  shouldComponentUpdate( nextProps, nextState ){
    console.log('[Person] Inside componentshouldupdate', nextProps, nextState);
    return true;
  }
  
  componentWillUpdate( nextProps, nextState ) {
    console.log('[Person] Inside Component will update');
  }

  componenetDidUpdate() {
    console.log('[Person] Inside Component did update');
  }

  render() {
    return (
      <WithClass className={classes.Person}>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </WithClass>
    )
  }
}

export default Person;