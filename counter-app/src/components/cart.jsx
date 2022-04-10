import React, { Component } from "react";
import Counters from "./counters";

class Cart extends Component {
  render() {
    return <>{this.displayNav()}</>;
  }

  displayNav() {
    if (this.props.Visible) {
      return (
        <aside className="cart">
          <div className="cart--title position-relative mt-4">
            <p>Shopping Cart</p>
            <a
              onClick={this.props.onCartPressed}
              className="cart--close-button"
            >
              X
            </a>
          </div>
          <Counters
            basketItems={this.props.basketItems}
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
          <div className="cart--checkout-box">
            <p className="cart--total">
              Total: £{this.props.basketTotal.toFixed(2)}
            </p>
            <button
              onClick={this.props.onReset}
              className="btn btn-danger mr-2"
            >
              Clear Cart
            </button>
            <button onClick={this.props.onCheckout} className="btn btn-primary">
              Checkout
            </button>
          </div>
        </aside>
      );
    }

    return null;
  }

  componentDidUpdate() {
    console.log("Did Update");
  }

  componentDidMount() {
    console.log("Did Mount");
  }
}

export default Cart;
