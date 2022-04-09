import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

// Stateless Functional Component
// Using functions is a cleaner way of creating components if they are simple and stateless.
// For this to work we need to pass in props as a varaible into the function then access it differently.
// We can also use object destructuring to access the value without using props.
// Life cycle hooks can not be used in stateless components as they are inhertied from 'Component'

const NavBar = ({ totalCounters, onCartPressed }) => {
  return (
    <nav className="store-nav navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{""}
      </a>
      <a
        href="#"
        className="badge badge-pill badge-secondary ml-1"
        onClick={() => onCartPressed()}
      >
        <FontAwesomeIcon className="fa-lg" icon={faBasketShopping} />
        <span className="ml-2 font-weight-bold">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
