import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// 这里使用hash进行跳转，可以更改为 BrowserRouter 正常链接跳转
import { HashRouter as Router } from 'react-router-dom';
// 引入组件
import Index from './index';
// 引入样式文件
import './scss/main.scss';

ReactDOM.render(
  <Provider>
    <Router>
      <Index/>
    </Router>
  </Provider>,
  document.getElementById('app')
)

