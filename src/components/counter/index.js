import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from 'Action/counter';

@connect((state) => {
  return state;
})
class Counter extends Component {
  constructor(props) {
    super(props);
  }
  _incrementCounter = () => {
    this.props.dispatch(incrementCount(2));
  }
  _decrementCounter = () => {
    this.props.dispatch(decrementCount(-2));
  }
  render(){
    const { counter } = this.props;
    console.log(this.props);
    return(
      <div>
        <h2>Number:{counter}</h2>
        <button onClick={this._incrementCounter}>+</button>
        <button onClick={this._decrementCounter}>-</button>
      </div>
    )
  }
}

export default Counter;