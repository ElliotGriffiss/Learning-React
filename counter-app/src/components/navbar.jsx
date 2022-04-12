import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

class NavBar extends Component {
  render() {
    return (
      <div className="store-nav">
        <nav className="navbar p-0 container">
          <div>
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
          </div>
          <div className="mobile-cart-reorder">
            <div className="tablet-display-none">
              {this.props.productCategories.map((cat) => {
                return (
                  <a
                    key={cat}
                    onClick={() => this.props.onCategoryPressed(cat)}
                    className="store-nav--cat-button"
                    href="#"
                  >
                    {cat}
                  </a>
                );
              })}
            </div>
            <div className="tablet-display">
              <div className="dropdown">
                <a
                  className="white dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  {this.props.productCategories.map((cat) => {
                    return (
                      <a
                        key={cat}
                        onClick={() => this.props.onCategoryPressed(cat)}
                        className="dropdown-item"
                        href="#"
                      >
                        {cat}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div>
            <a
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
          </div>
        </nav>
      </div>
    );
  }

  // Adds the cart counter to the GUI if there are more than one item in the basket
  GetCartCounter() {
    if (this.props.totalBasketItems > 0) {
      return (
        <span className="store-nav--cart-counter">
          {this.props.totalBasketItems}
        </span>
      );
    }

    return null;
  }
}

export default NavBar;
