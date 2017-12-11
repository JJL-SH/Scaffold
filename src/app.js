import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// 这里使用hash进行跳转，可以更改为 BrowserRouter 正常链接跳转
import { HashRouter as Router } from 'react-router-dom';
// 引入组件
import Index from './index';
import reducer from './reducer';
// 引入样式文件
import './scss/main.scss';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Index/>
    </Router>
  </Provider>,
  document.getElementById('app')
)

