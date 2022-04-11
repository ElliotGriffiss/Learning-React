import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class ProductDisplay extends Component {
  render() {
    return <>{this.ShowProductDisplay()}</>;
  }

  ShowProductDisplay = () => {
    if (this.props.displayProduct != undefined) {
      document.documentElement.style.overflowY = "hidden";
      return (
        <div className="product-display--countainer">
          <div
            className="product-display--backdrop"
            onClick={() => this.props.onCloseProductDisplay()}
          ></div>
          <div className="product-display--wrapper">
            <button
              className="product-display--close btn btn-danger btn-sm m-2 font-weight-bold"
              onClick={() => this.props.onCloseProductDisplay()}
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
                <button
                  className="btn storefront--cart-button"
                  onClick={() =>
                    this.props.onAddToCart(this.props.displayProduct)
                  }
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
}

export default ProductDisplay;
