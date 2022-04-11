import React, { Component } from "react";
import Counter from "./counter";

class CartItems extends Component {
  render() {
    return (
      <div className="cart--counters-container">
        {this.props.basketItems.map((basketItem) => (
          <Counter
            key={basketItem.Product.Id} // Key is used internally within react so we can't access it...
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            basketItem={basketItem}
          />
        ))}
      </div>
    );
  }
}

export default CartItems;
