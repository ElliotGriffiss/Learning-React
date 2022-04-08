import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters'; /* Class name followed by src */
import React, { Component } from 'react';

class App extends Component {
  state = {
    Counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 2 },
    ],
  }

  // A constructor is called only once when an instance of a class is created.
  // It can be used to initalized the properties in an instance (similar to C#).
  constructor() {
    super();
    // For the following code to work we need to pass in props to the constructor and the super.
    // this.state = this.props.property;
  }

  // This is called once the DOM has been loaded and should be used to make Ajax calls to populate data from the server.
  componentDidMount() {
    console.log("app mounted");
  }

  handleIncrement = (counter) => {
    console.log("Increment");
    const counters = [...this.state.Counters]; // this is the spread operator, it will pass all objects from this.state.counters into const counters
    const index = counters.indexOf(counter); // get index of counter passsed by event
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ Counters: counters }); // update the state by passing in the new counters array to the state.Counters array
  };

  handleReset = () => {
    console.log("Reset");
    const counters = this.state.Counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Delete");
    const counters = this.state.Counters.filter((c) => c.id !== counterId); // This is very similar to Linq 'Enumerable.Where'.
    this.setState({ Counters: counters });
  };

  render() {
    return (
      <React.Fragment>
          <NavBar totalCounters={this.state.Counters.filter(c => c.value > 0).length} />
          <main className='container'>
            <Counters Counters={this.state.Counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
          </main>
      </React.Fragment>
    );
  }
}

export default App;
