import Home from './page/home';
import About from './page/about';
import Counter from './page/counter';
import Page404 from './page/page404';

module.exports = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    exact: false,
    component: About
  },
  {
    path: '/counter',
    exact: false,
    component: Counter
  },
  {
    path: '*',
    exact: false,
    component: Page404
  }
]