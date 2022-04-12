import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Cart from './components/cart';
import StoreFront from './components/storefront';
import ProductDisplay from './components/productDisplay';
import Colophon from './components/colophon';
import Products from "./products.json";
import ProductCategories from "./productCategories.json"

class App extends Component {
  state = {
    BasketItems: [

    ],
    BasketTotal: 0,
    CartActive: false,
    DisplayProduct: null,
    ActiveCat: "All",     // TODO: learn How To Use Enums in JavaScript
  }

  handleChangeCategory = (catString) => {
    this.setState({ActiveCat: catString});
  }

  getActiveProducts = (catString) => {
      return (catString !== "All") ? Products.filter((c) => c.category.toUpperCase() === catString.toUpperCase()) : Products;
  }

  // Increases Quantity of an item in the basket
  handleIncrement = (bItem) => {
    const basketItems = [...this.state.BasketItems];
    const index = basketItems.indexOf(bItem);
    basketItems[index] = { ...bItem };
    basketItems[index].Quantity++;

    const basketTotal = this.UpdateBasketTotal(basketItems);
    this.setState({ BasketItems: basketItems, BasketTotal: basketTotal });
  };

  // Decreases Quantity of an item in the basket.
  handleDecrement = (bItem) => {
    const basketItems = [...this.state.BasketItems];
    const index = basketItems.indexOf(bItem);
    basketItems[index] = { ...bItem };
  
    // Removes an item from the basket if it has a value of less than zero.
    if (basketItems[index].Quantity <= 0)
    {
      this.handleDelete(basketItems[index].Product.id);
    }
    else
    {
      basketItems[index].Quantity--;
      const basketTotal = this.UpdateBasketTotal(basketItems);
      this.setState({ BasketItems: basketItems, BasketTotal: basketTotal });
    }
  };

  // Removes all items in the cart.
  handleReset = () => {
    const basketItems = [

    ];

    const basketTotal = this.UpdateBasketTotal(basketItems);
    this.setState({ BasketItems: basketItems, BasketTotal: basketTotal });
  };

  // Deletes a basket item from the cart.
  handleDelete = (productId) => {
    const basketItems = this.state.BasketItems.filter((c) => c.Product.id !== productId);
    const basketTotal = this.UpdateBasketTotal(basketItems);
    
    this.setState({ BasketItems: basketItems, BasketTotal: basketTotal });
  };

  // Toggles the carts active state.
  handleToggleCart = () => {
    let cartActive = this.state.CartActive;
    cartActive = !cartActive;

    // TODO: This is bad practice, I should be useing an enum to represent the current state of the app
    // and then checking against that. I'll keep that in mind for next time.
    let newState = (this.state.DisplayProduct == null) ? {CartActive: cartActive} : {CartActive: cartActive, DisplayProduct: null};
    this.setState(newState);
  }

  // Adds a product to the cart.
  handleAddToCart = (product, quantity = 1) => {
    let basketItems = [...this.state.BasketItems];
    let basketItem = basketItems.find((b) => b.Product.id === product.id);

    if (basketItem === undefined)
    {
        basketItem = {
         Product: product, 
         Quantity: quantity,
        };

        basketItems.push(basketItem);
    }
    else
    { 
      const index = basketItems.indexOf(basketItem);
      basketItems[index] = { ...basketItem };
      basketItems[index].Quantity += quantity;
    }

    const basketTotal = this.UpdateBasketTotal(basketItems);
    this.setState({ BasketItems: basketItems, BasketTotal: basketTotal });
  }

  // Handles the checkout functionality of the cart.
  handleCheckout = () => {
    alert("React Storefront was made to practice my web development skills, there is no check out.");
  }

  // Opens the product display and closes any other open panels.
  handleOpenProductDisplay = (product) => {
    let cartActive = this.state.CartActive;
    const Product = product;
    cartActive = false;
    this.setState({CartActive: cartActive, DisplayProduct: Product});
  }

  // Closes the product display.
  handleCloseProductDisplay = () => {
    this.setState({DisplayProduct: null});
  }

  // Updates the basket total cost.
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
          <NavBar productCategories={ProductCategories} onCategoryPressed={this.handleChangeCategory} onCartPressed={this.handleToggleCart} basketTotal={this.state.BasketTotal} totalBasketItems={this.state.BasketItems.length} />
          <Cart Visible={this.state.CartActive} onCartPressed={this.handleToggleCart} onCheckout={this.handleCheckout} basketTotal={this.state.BasketTotal} basketItems={this.state.BasketItems} onReset={this.handleReset} onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
          <main className='position-relative'>
            <StoreFront products={this.getActiveProducts(this.state.ActiveCat)} onAddToCart={this.handleAddToCart} onViewProduct={this.handleOpenProductDisplay} />
            <ProductDisplay displayProduct={this.state.DisplayProduct} onAddToCart={this.handleAddToCart} onCloseProductDisplay={this.handleCloseProductDisplay} />
            <Colophon />
          </main>
      </React.Fragment>
    );
  }
}

export default App;