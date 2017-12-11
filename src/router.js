import Home from './js/components/home';
import About from './js/components/about';
import Page404 from './js/components/page404';

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
    path: '*',
    exact: false,
    component: Page404
  }
]