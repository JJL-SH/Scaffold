import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount, saga_incrementCount } from 'Action/counter';

@connect((state) => {
  return state;
})
class Counter extends Component {
  constructor(props) {
    super(props);
  }
  _incrementCounter = () => {
    this.props.dispatch(incrementCount(1));
  }
  _decrementCounter = () => {
    this.props.dispatch(decrementCount(1));
  }
  _sagaIncrementCounter = () => {
    this.props.dispatch(saga_incrementCount(10))
  }
  render(){
    const { counter } = this.props;

    return(
      <div>
        <h2>Number:{counter}</h2>
        <button onClick={this._incrementCounter}>+</button>
        <button onClick={this._decrementCounter}>-</button>
        <button onClick={this._sagaIncrementCounter}>&</button>
      </div>
    )
  }
}

export default Counter;