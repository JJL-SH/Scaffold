import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="pHome">
        <h2 className="pHome__title">首页</h2>
        <p className="pHome__desc">此脚手架仅用于个人学习所用</p>
      </div>
    )
  }
}

export default Home;