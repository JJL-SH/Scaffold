import React from 'react';
import ReactDOM from 'react-dom';
// 这里使用hash进行跳转，可以更改为 BrowserRouter 正常链接跳转
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// 引入组件
import Index from './js/Index';
import Demo from './js/Demo';
import { Menu } from './js/Menu';

// 引入样式文件
import './scss/main.scss';

ReactDOM.render(
  <Router>
    <div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/demo" component={Demo}/>
        <Redirect path="*" to="/"/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('app')
)

