import React, { Component } from "react";

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
          <p>{this.props.product.description}</p>
          <p>
            <strong>£{this.props.product.price.toFixed(2)}</strong>
          </p>
          <button
            onClick={() => this.props.onAddToCart(this.props.product)}
            className="btn storefront--cart-button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default StoreItem;
