import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Cart from './components/cart';
import StoreFront from './components/storefront';
import Colophon from './components/colophon';

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

  handleIncrement = (item) => {
    console.log("Increment");
    const basketItems = [...this.state.BasketItems]; // this is the spread operator, it will pass all objects from this.state.counters into const counters
    const index = basketItems.indexOf(item); // get index of counter passsed by event
    basketItems[index] = { ...item };
    basketItems[index].Quantity++;

    const basketTotal = this.UpdateBasketTotal(basketItems);
    this.setState({ BasketItems: basketItems, BasketTotal: basketTotal });
  };

  handleDecrement = (item) => {
    console.log("Decrement");
    const basketItems = [...this.state.BasketItems]; // this is the spread operator, it will pass all objects from this.state.counters into const counters
    const index = basketItems.indexOf(item); // get index of counter passsed by event
    basketItems[index] = { ...item };
  
    // added in some code to remove counters based on number of items
    if (basketItems[index].Quantity <= 0)
    {
      this.handleDelete(basketItems[index].Product.id);
      console.log("delete: "+basketItems[index].Product.id);
    }
    else
    {
      basketItems[index].Quantity--;
      const basketTotal = this.UpdateBasketTotal(basketItems);
      this.setState({ BasketItems: basketItems, BasketTotal: basketTotal });
    }
  };

  handleReset = () => {
    console.log("Reset");
    const basketItems = [

    ];

    const basketTotal = this.UpdateBasketTotal(basketItems);
    this.setState({ BasketItems: basketItems, BasketTotal: basketTotal });
  };

  handleDelete = (productId) => {
    console.log("Delete");
    const basketItems = this.state.BasketItems.filter((c) => c.Product.id !== productId); // This is very similar to Linq 'Enumerable.Where'.
    const basketTotal = this.UpdateBasketTotal(basketItems);
    
    this.setState({ BasketItems: basketItems, BasketTotal: basketTotal });
  };

  handleToggleCart = () => {
    let cartActive = this.state.CartActive;
    cartActive = !cartActive;
    console.log(cartActive);
    this.setState({CartActive: cartActive});
  }

  handleAddToCart = (product) => {
    console.log("Add Item to Cart: "+product.id);

    let basketItems = [...this.state.BasketItems];
    let basketItem = basketItems.find((b) => b.Product.id === product.id);

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

  handleCheckout = () => {
    console.log("Handle Checkout");
    alert("React Storefront was made to practice my web development skills, there is no check out.");
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
          <NavBar onCartPressed={this.handleToggleCart} basketTotal={this.state.BasketTotal} totalCounters={this.state.BasketItems.length} />
          <Cart Visible={this.state.CartActive} onCartPressed={this.handleToggleCart} onCheckout={this.handleCheckout} basketTotal={this.state.BasketTotal} basketItems={this.state.BasketItems} onReset={this.handleReset} onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
          <main>
            <StoreFront onAddToCart={this.handleAddToCart} />
          </main>
          <Colophon />
      </React.Fragment>
    );
  }
}

export default App;