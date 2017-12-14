import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
// 这里使用hash进行跳转，可以更改为 BrowserRouter 正常链接跳转
import { HashRouter as Router } from 'react-router-dom';
// 引入组件
import Index from './index';
import reducer from './reducer';
import { mySaga } from './saga/counter';
// 引入样式文件
import './scss/main.scss';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Index/>
    </Router>
  </Provider>,
  document.getElementById('app')
)

