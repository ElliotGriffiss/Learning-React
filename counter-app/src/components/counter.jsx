import React, { Component } from "react";

class CartItem extends Component {
  state = {};

  style = {
    fontSize: 18,
    fontWeight: "bold",
    minWidth: 36,
  };

  render() {
    let counterClasses = this.getBadgeClasses();

    let imageStyle = {
      backgroundImage: "url(" + this.props.basketItem.Product.image + ")",
    };

    return (
      <div className="cart--counter">
        <div className="col-sm-5">
          <div className="cart--image-container">
            <div
              className="cart--image background-image"
              style={imageStyle}
            ></div>
          </div>
        </div>
        <div className="cart--info col-sm-5">
          <p className="cart--counter-title">
            {this.props.basketItem.Product.title}
          </p>
          <div className="cart--buttons">
            <p className="cart--counter-sub-total">£{this.getSubtotal()}</p>
            <button
              onClick={() => this.props.onDecrement(this.props.basketItem)}
              className="btn btn-secondary btn-sm"
            >
              -
            </button>
            <span style={this.style} className={counterClasses}>
              {this.props.basketItem.Quantity}
            </span>
            <button
              onClick={() => this.props.onIncrement(this.props.basketItem)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              className="btn btn-danger btn-sm m-2"
              onClick={() =>
                this.props.onDelete(this.props.basketItem.Product.id)
              }
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Gets the sub total of an basket item in the cart
  getSubtotal() {
    return (
      this.props.basketItem.Product.price * this.props.basketItem.Quantity
    ).toFixed(2);
  }

  // Styles up the badge used to hold the count
  getBadgeClasses() {
    let counterClasses = "badge m-2 badge";
    counterClasses +=
      this.props.basketItem.Quantity == 0 ? "-warning" : "-primary";
    return counterClasses;
  }
}

export default CartItem;
