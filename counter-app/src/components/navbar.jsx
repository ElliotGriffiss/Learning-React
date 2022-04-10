import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

// Stateless Functional Component
// Using functions is a cleaner way of creating components if they are simple and stateless.
// For this to work we need to pass in props as a varaible into the function then access it differently.
// We can also use object destructuring to access the value without using props.
// Life cycle hooks can not be used in stateless components as they are inhertied from 'Component'
// This component now has a state so it has to inherit Component

class NavBar extends Component {
  render() {
    return (
      <div className="store-nav">
        <nav className="navbar p-0">
          <a className="store-nav--nav" href="#">
            <FontAwesomeIcon
              className="store-nav--logo-icon mr-2"
              icon={faReact}
            />
            <div className="store-nav--Logo-text">
              React
              <br />
              Storefront
            </div>
          </a>
          <a
            href="#"
            className="store-nav--cart mr-3 p-2"
            onClick={() => this.props.onCartPressed()}
          >
            <span className="mr-2 store-nav--total">
              £{this.props.basketTotal.toFixed(2)}
            </span>
            <div className="position-relative d-inline">
              <FontAwesomeIcon className="fa-lg" icon={faShoppingCart} />
              {this.GetCartCounter()}
            </div>
          </a>
        </nav>
      </div>
    );
  }

  GetCartCounter() {
    if (this.props.totalCounters > 0) {
      return (
        <span className="store-nav--cart-counter">
          {this.props.totalCounters}
        </span>
      );
    }

    return null;
  }
}

export default NavBar;
