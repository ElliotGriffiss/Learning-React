import React, {
  Component,
} from "react"; /* Imports the component class from react */

/* This component when rendered returns a <h1> tag */
class Counter extends Component {
  /* state is an object that includes any data this object needs */
  state = {};

  /* we can pass in this object style={this.style} to sent a DOM elements style */
  /* or we can use style={{fontSize: 3}} as an attribute */
  style = {
    fontSize: 18,
    fontWeight: "bold",
  };

  //  This can be avoided completely by using the arrow function as it provides a cleaner and easier way of accessing 'this'
  //   /* Reminder in javascript functions are objects and have properties and methods. */
  //   constructor() {
  //     super(); /* It is used to call the constructor of its parent class. This is required when we need to access some variables of its parent class. */
  //     this.handleIncrement =
  //       this.handleIncrement.bind(
  //         this
  //       ); /* this bind method will return a new instance of the HandleIncrement() function where 'this' is always a reference to the current object */
  //   }

  /* For this to work we need to access the state property,  */

  render() {
    let counterClasses = this.getBadgeClasses();

    // React.createElement() only takes 1 paramater, you must wrap multiple elements into a parent div, <></>, or use <React.Fragment></React.Fragment>
    // We can render the value of count by referencing the current object, the state object, and the varaible count. {this.state.count}
    // When creating a list a key attribute is required so that react can identify each element
    return (
      <div className="cart--counter">
        <p className="cart--counter-title">{this.props.item.Product.Title}</p>
        <div className="cart--buttons">
          <button
            onClick={() => this.props.onDecrement(this.props.item)}
            className="btn btn-secondary btn-sm"
          >
            -
          </button>
          <span style={this.style} className={counterClasses}>
            {this.formattCount()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.item)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.itemnpm.Product.Id)}
          >
            X
          </button>
        </div>
      </div>
    ); /* this is a JSX expression not a string */
  }

  getBadgeClasses() {
    let counterClasses = "badge m-2 badge";
    counterClasses += this.props.item.Quantity == 0 ? "-warning" : "-primary";
    return counterClasses;
  }

  formattCount() {
    // we can use object destructuring to take the value property and store it in a constant called value
    const { value } = this.props.item.Quantity;
    return this.props.item.Quantity == 0 ? "Zero" : this.props.item.Quantity;
  }
}

export default Counter;
