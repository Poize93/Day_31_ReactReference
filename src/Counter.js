import React from 'react';
/// next way Static ContextType = Context for consumer to con=nsume
// import { Context } from './Context';

class Counter extends React.Component {
  // static contextType = Context;
  constructor() {
    super();
    this.state = {
      value: 5,
    };
  }

  handleIncrement = () => {
    this.setState({ value: ++this.state.value });
  };

  handleDecrement = () => {
    this.setState({ value: --this.state.value });
  };
  handleReset = () => {
    this.setState({ value: 5 });
  };

  render() {
    return (
      <>
        <h3> Counte Component</h3>
        Value:{this.state.value}
        <br />
        <br />
        <button onClick={() => this.handleIncrement()}>Increment</button> &nbsp;
        <button onClick={this.handleIncrement}>Decerement</button> &nbsp;
        <button onClick={this.handleReset}>Reset</button>
        &nbsp;
      </>
    );
  }
}

export default Counter;
