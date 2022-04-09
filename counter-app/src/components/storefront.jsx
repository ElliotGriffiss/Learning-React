import React, { Component } from "react";
import Products from "../products.json";
import StoreItem from "./storeItem";

class StoreFront extends Component {
  state = {};
  render() {
    return (
      <div className="container default-padding-top">
        <div className="row justify-content-start align-items-top">
          {Products.map((product) => {
            return (
              <StoreItem
                key={product.Id}
                product={product}
                onAddToCart={this.props.onAddToCart}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default StoreFront;
