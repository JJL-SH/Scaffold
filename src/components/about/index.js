import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import router from './router';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h2>关于</h2>
        <p>这个页面是关于！</p>
        <p><Link to={this.props.match.url + '/me'}>Me</Link></p>
        {
          // 路由输出
          router.map((route, index) => {
            return <Route key={index} exact={route.exact} path={this.props.match.url + route.path} component={route.component}/>
          })
        }
      </div>
    )
  }
}

export default About;