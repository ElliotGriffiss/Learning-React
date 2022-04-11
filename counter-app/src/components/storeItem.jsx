import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class StoreItem extends Component {
  render() {
    let imageStyle = {
      backgroundImage: "url(" + this.props.product.image + ")",
    };

    return (
      <div
        className="col-sm-4 default-padding-bottom"
        key={this.props.product.id}
      >
        <div className="storefront--card">
          <h3 className="mb-2 mt-1">{this.props.product.title}</h3>
          <div className="storefront--card-image-container mb-2">
            <div
              className="storefront--card-image background-image"
              style={imageStyle}
            ></div>
          </div>
          <p className="storefront--card-description">
            {this.formatDescription()}
          </p>
          <p>
            <strong>£{this.props.product.price.toFixed(2)}</strong>
          </p>
          <button
            onClick={() => this.props.onViewProduct(this.props.product)}
            className="btn storefront--cart-button mr-2"
          >
            Product Details
          </button>
          <button
            className="btn storefront--cart-button"
            onClick={() => this.props.onAddToCart(this.props.product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    );
  }

  // Reduces the number of characters in the description to ensure the cards fit nicely on screen
  formatDescription = () => {
    const { description } = this.props.product;
    console.log(description);

    return (
      <React.Fragment>
        {description.length > 140
          ? `${description.substring(0, 140)}...`
          : description}
      </React.Fragment>
    );
  };
}

export default StoreItem;
