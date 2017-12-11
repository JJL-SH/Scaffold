import Home from './components/home';
import About from './components/about';
import Counter from './components/counter';
import Page404 from './components/page404';

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