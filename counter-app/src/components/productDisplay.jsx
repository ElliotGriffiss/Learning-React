import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class ProductDisplay extends Component {
  state = {
    Quantity: 1,
    SuccessNotification: false,
    BackGroundFadeIn: false,
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

  // Handles when we add an item to the cart
  addItemToCart = () => {
    this.props.onAddToCart(this.props.displayProduct, this.state.Quantity);
    this.setState({ Quantity: 1, SuccessNotification: true });
  };

  // If we handle this here we can also reset the item quantity
  closeProductDisplay = () => {
    this.props.onCloseProductDisplay();
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
            <div className="product-display--wrapper-style">
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
                    <strong>
                      £{this.props.displayProduct.price.toFixed(2)}
                    </strong>
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
                  <div className="d-flex align-items-end">
                    <button
                      className="btn storefront--cart-button"
                      onClick={() => this.addItemToCart()}
                    >
                      Add To Cart
                      <FontAwesomeIcon className="ml-2" icon={faShoppingCart} />
                    </button>
                    {this.getItemAddedNotification()}
                  </div>
                </div>
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

  getItemAddedNotification() {
    let notificationClasses = "ml-2 blue ";
    notificationClasses += this.state.SuccessNotification
      ? "product-display--success-notification-active"
      : "product-display--success-notification";

    return this.state.SuccessNotification ? (
      <span
        className={notificationClasses}
        onAnimationEnd={() => this.setState({ SuccessNotification: false })}
      >
        Item(s) Added to Cart Successfully.
      </span>
    ) : null;
  }
}

export default ProductDisplay;
