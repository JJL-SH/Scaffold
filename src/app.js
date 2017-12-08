import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
// 引入组件
import Index from './js/Index';
import Demo from './js/Demo';
import { Menu } from './js/Menu';

// 引入样式文件
import './scss/main.scss';

ReactDOM.render(
  <HashRouter>
    <div>
      <Menu/>
      <Route path="/" component={Index}/>
      <Route path="/demo" component={Demo}/>
    </div>
  </HashRouter>,
  document.getElementById('app')
)

