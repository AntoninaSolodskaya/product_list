import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3>The answer is: {data}</h3>
        <MDBBtn onClick={incrementCounter}>Increment</MDBBtn>
        <MDBBtn onClick={decrementCounter}>Decrement</MDBBtn> 
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestComponent);
