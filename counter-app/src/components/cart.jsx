import React, { Component } from "react";
import Counters from "./counters";

class Cart extends Component {
  render() {
    return <>{this.displayNav()}</>;
  }

  displayNav() {
    if (this.props.Visible) {
      return (
        <aside className="cart cart-show">
          <p className="cart--title mt-4">Shopping Cart</p>
          <Counters
            Counters={this.props.Counters}
            onReset={this.props.onReset}
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
          <p className="cart--total">
            Total: £{this.props.basketTotal.toFixed(2)}
          </p>
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
