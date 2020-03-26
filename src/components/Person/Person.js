import React, {Component} from 'react';
import styles from './Person.css';

class Person extends Component {
  render() {
    return (
      <div>
        Hi, my name is {this.props.name} and my age is {this.props.age}:{' '}
        <span className={styles.description}>{this.props.children}</span>
      </div>
    );
  }
}

export default Person;
