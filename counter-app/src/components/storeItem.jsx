import React, { Component } from "react";

class StoreItem extends Component {
  state = {};
  render() {
    return (
      <div
        className="col-sm-4 default-padding-bottom"
        key={this.props.product.Id}
      >
        <div className="storefront--card">
          <h3>{this.props.product.Title}</h3>
          <img src={this.props.product.img} alt="" />
          <p>{this.props.product.Description}</p>
          <p>
            <strong>£{this.props.product.price}</strong>
          </p>
          <button
            onClick={() => this.props.onAddToCart(this.props.product)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default StoreItem;
