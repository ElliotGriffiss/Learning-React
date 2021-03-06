import React, { Component } from "react";
import StoreItem from "./storeItem";

class StoreFront extends Component {
  state = {};
  render() {
    return (
      <div className="container default-padding-top storefront--container">
        <h1 className="mb-4">Shop - {this.props.category}</h1>
        <div className="row justify-content-start align-items-top">
          {this.props.products.map((product) => {
            return (
              <StoreItem
                key={product.id}
                product={product}
                onAddToCart={this.props.onAddToCart}
                onViewProduct={this.props.onViewProduct}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default StoreFront;
