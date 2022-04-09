import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Clear Cart
        </button>
        {this.props.Counters.map((counter) => (
          <Counter
            key={counter.id} // Key is used internally within react so we can't access it...
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
