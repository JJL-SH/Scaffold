import React, { Component } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import router from './router';

import Menu from 'Component/menu';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textShadow: '0 0'
    }
  }

  componentWillMount() {
    document.addEventListener('mousemove', this._mouseMove);
  }
  componentWillUnmount() {
    document.removeEventListener('mousemove', this._mouseMove);
  }
  _mouseMove = (event) => {
    let viewHeight = document.documentElement.clientHeight / 2;
    let viewWidth = document.documentElement.clientWidth / 2;
    let textX = 10 * ((viewWidth - event.clientX) / viewWidth)
    let textY = 10 * ((viewHeight - event.clientY) / viewHeight)

    this.setState({
      textShadow: `${textX}px ${textY}px`
    })
  }
  render() {
    const state = this.state;

    return(
      <div className="pIndex">
        <h2 className="pIndex__slogan" style={{textShadow: state.textShadow +' 25px rgba(0,0,0,.5)'}}><strong>SCAFFOLD</strong></h2>
        <Menu/>
        <div className="pIndex__wrapper">
          <Switch>
            {
              // 路由输出
              router.map((route, index) => {
                return <Route key={index} exact={route.exact} path={route.path} component={route.component}/>
              })
            }
          </Switch>
        </div>
      </div>
    )
  }
}

export default Index;