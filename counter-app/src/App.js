import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Cart from './components/cart';
import StoreFront from './components/storefront';
import React, { Component } from 'react';

class App extends Component {
  state = {
    BasketItems: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
    BasketTotal: 10,
    CartActive: false,
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
    const counters = [...this.state.BasketItems]; // this is the spread operator, it will pass all objects from this.state.counters into const counters
    const index = counters.indexOf(counter); // get index of counter passsed by event
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ BasketItems: counters }); // update the state by passing in the new counters array to the state.Counters array
  };

  handleDecrement = (counter) => {
    console.log("Decrement");
    const counters = [...this.state.BasketItems]; // this is the spread operator, it will pass all objects from this.state.counters into const counters
    const index = counters.indexOf(counter); // get index of counter passsed by event
    counters[index] = { ...counter };
  
    // added in some code to remove counters based on number of items
    if (counters[index].value <= 0)
    {
      this.handleDelete(counters[index].id);
      console.log("delete: "+counters[index].id);
    }
    else
    {
      counters[index].value--;
      this.setState({ BasketItems: counters }); // update the state by passing in the new counters array to the state.Counters array
    }
  };


  handleReset = () => {
    console.log("Reset");
    const counters = this.state.BasketItems.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Delete");
    const counters = this.state.BasketItems.filter((c) => c.id !== counterId); // This is very similar to Linq 'Enumerable.Where'.
    this.setState({ BasketItems: counters });
  };

  handleToggleCart = () => {
    let cartActive = this.state.CartActive;
    cartActive = !cartActive;
    console.log(cartActive);
    this.setState({CartActive: cartActive});
  }

  handleAddToCart = (product) => {
    console.log("Add Item to Cart: "+product.Id);
  }

  UpdateCartTotal = () =>{

  }

  render() {
    return (
      <React.Fragment>
          <NavBar onCartPressed={this.handleToggleCart} basketTotal={this.state.BasketTotal} totalCounters={this.state.BasketItems.filter(c => c.value > 0).length} />
          <Cart Visible={this.state.CartActive} basketTotal={this.state.BasketTotal} Counters={this.state.BasketItems} onReset={this.handleReset} onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
          <main>
            <StoreFront onAddToCart={this.handleAddToCart} />
          </main>
      </React.Fragment>
    );
  }
}

export default App;