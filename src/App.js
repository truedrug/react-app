import React, {Component} from 'react';
import './App.css';
import Person from './components/Person/Person';
import FunctionalComponent from './components/functional-component/functional-component';
import InlineStylesComponent from './components/inline-styles/inline-styles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        {name: 'Sushree', age: 28, description: 'Hero'},
        {name: 'Sushree 1', age: 28, description: 'Hero 1'},
        {name: 'Sushree 3', age: 30},
      ],
    };

    this.nameChangeHandler = this.nameChangeHandler.bind(this);
  }

  nameChangeHandler() {
    this.setState({
      persons: [
        {name: 'Hey', age: 28, description: 'Hero'},
        {name: 'Hey 1', age: 28, description: 'Hero 1'},
        {name: 'Hey 3', age: 30},
      ],
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.nameChangeHandler}>Change name</button>
        {this.state.persons.map(person => (
          <Person key={person.name} name={person.name} age={person.age}>
            {person.description}
          </Person>
        ))}
        <FunctionalComponent></FunctionalComponent>
        <InlineStylesComponent></InlineStylesComponent>
      </div>
    );
  }
}

export default App;
