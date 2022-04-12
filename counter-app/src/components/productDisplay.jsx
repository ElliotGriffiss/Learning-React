import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class ProductDisplay extends Component {
  state = {
    Quantity: 1,
  };

  style = {
    fontSize: 21,
    fontWeight: "bold",
    minWidth: 42,
  };

  // Increases Quantity of an item in the product display
  handleIncrement = () => {
    let quantity = [this.state.Quantity];
    quantity = this.state.Quantity + 1;

    this.setState({ Quantity: quantity });
  };

  // Decreases Quantity of an item in the product display.
  handleDecrement = () => {
    let quantity = [this.state.Quantity];
    quantity = this.state.Quantity - 1;
    quantity = quantity < 1 ? 1 : quantity;

    this.setState({ Quantity: quantity });
  };

  addItemToCart = () => {
    this.props.onAddToCart(this.props.displayProduct, this.state.Quantity);
    this.ResetQuantity();
  };

  // If we handle this here we can also reset the item quantity
  closeProductDisplay = () => {
    this.props.onCloseProductDisplay();
    this.ResetQuantity();
  };

  // When close the panel or add an item to cart we need to make sure we reset the quantity
  ResetQuantity = () => {
    this.setState({ Quantity: 1 });
  };

  render() {
    return <>{this.ShowProductDisplay()}</>;
  }

  // Returns the product display if there is a product to display
  ShowProductDisplay = () => {
    if (this.props.displayProduct != undefined) {
      let counterClasses = this.getBadgeClasses();
      let minusButtonClasses = this.getMinusButtonClasses();
      document.documentElement.style.overflowY = "hidden";

      return (
        <div className="product-display--countainer">
          <div
            className="product-display--backdrop"
            onClick={() => this.closeProductDisplay()}
          ></div>
          <div className="product-display--wrapper">
            <button
              className="product-display--close btn btn-danger btn-sm m-2 font-weight-bold"
              onClick={() => this.closeProductDisplay()}
            >
              X
            </button>
            <div className="row align-items-start justify-content-start height-100">
              <div className="col-sm-6 product-display--col-image">
                <img
                  className="product-display--card-image"
                  src={this.props.displayProduct.image}
                  alt=""
                />
              </div>
              <div className="col-sm-5">
                <h2>{this.props.displayProduct.title}</h2>
                <p>
                  <strong>£{this.props.displayProduct.price.toFixed(2)}</strong>
                </p>
                <p>{this.props.displayProduct.description}</p>
                <div className="cart--buttons mb-3">
                  <button
                    onClick={() => this.handleDecrement()}
                    className={minusButtonClasses}
                  >
                    -
                  </button>
                  <span style={this.style} className={counterClasses}>
                    {this.state.Quantity}
                  </span>
                  <button
                    onClick={() => this.handleIncrement()}
                    className="btn btn-secondary btn-sm"
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn storefront--cart-button"
                  onClick={() => this.addItemToCart()}
                >
                  Add To Cart
                  <FontAwesomeIcon className="ml-2" icon={faShoppingCart} />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      document.documentElement.style.overflowY = "scroll";
    }

    return null;
  };

  // Styles up the minus button depending on state
  getMinusButtonClasses() {
    let minusButtonClasses = "btn btn-secondary btn-sm";
    minusButtonClasses += this.state.Quantity <= 1 ? " disabled" : "";
    return minusButtonClasses;
  }

  // Styles up the badge used to hold the count
  getBadgeClasses() {
    let counterClasses = "badge m-2 badge";
    counterClasses += this.state.Quantity == 0 ? "-warning" : "-primary";
    return counterClasses;
  }
}

export default ProductDisplay;
