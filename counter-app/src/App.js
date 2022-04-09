import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Cart from './components/cart';
import StoreFront from './components/storefront';
import React, { Component } from 'react';

class App extends Component {
  state = {
    BasketItems: [

    ],
    BasketTotal: 0,
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
    const basketItems = [...this.state.BasketItems]; // this is the spread operator, it will pass all objects from this.state.counters into const counters
    const index = basketItems.indexOf(counter); // get index of counter passsed by event
    basketItems[index] = { ...counter };
    basketItems[index].value++;
    this.setState({ BasketItems: basketItems }); // update the state by passing in the new counters array to the state.Counters array
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

    let basketItems = [...this.state.BasketItems];
    let basketItem = basketItems.find((b) => b.Product.Id === product.Id);

    if (basketItem === undefined)
    {
        console.log("Item Not In Basket");
        basketItem = {
         Product: product, 
         Quantity: 1,
        };

        basketItems.push(basketItem);
    }
    else
    { 
      console.log("Already In Basket");
      const index = basketItems.indexOf(basketItem);
      basketItems[index] = { ...basketItem };
      basketItems[index].Quantity++;
    }

    const basketTotal = this.UpdateBasketTotal(basketItems);
    this.setState({ BasketItems: basketItems, BasketTotal: basketTotal });
  }

  UpdateBasketTotal = (basketItems) => {
    let basketTotal = 0;

    basketItems.forEach(element => {
      basketTotal += element.Product.price * element.Quantity;
    });

    return basketTotal;
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