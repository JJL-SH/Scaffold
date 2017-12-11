import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// 引入组件
import Page404 from './js/components/page404';
import Home from './js/components/home';
import About from './js/components/about';
import { Route, Redirect, Switch } from 'react-router-dom';

import router from './router';

class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h2>Public Page</h2>
        <h3>
          <Link to="/">Home</Link>&nbsp;|&nbsp;
          <Link to="/about">About</Link>
        </h3>
        <Switch>
          {
            // 路由输出
            router.map((route, index) => {
              return <Route key={index} exact={route.exact} path={route.path} component={route.component}/>
            })
          }
        </Switch>
      </div>
    )
  }
}

export default Index;