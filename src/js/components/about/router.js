import Me from './components/me';

module.exports = [
  {
    path: '/',
    exact: true,
    component: Me
  },
  {
    path: '/me',
    exact: false,
    component: Me
  }
]