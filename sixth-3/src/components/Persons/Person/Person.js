import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';


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
    console.log('[Person] Inside constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person] Inside component will mount')
  }

  componentDidMount() {
    console.log('[Person] Inside componentDidMount');
    if(this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log( '[Person.js] Inside render()' );
    return (
      <Aux>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input 
          ref={this.inputElement}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} />
      </Aux>
    )
  }
}

Person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass( Person, classes.Person );