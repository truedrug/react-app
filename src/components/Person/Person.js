import React, {Component} from 'react';
import './Person.css';

class Person extends Component {
  render() {
    return (
      <div>
        Hi, my name is {this.props.name} and my age is {this.props.age}:{' '}
        <span className="description">{this.props.children}</span>
      </div>
    );
  }
}

export default Person;
