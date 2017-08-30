// Rotas das aplicação

import Home from '../components/Home';
import Joke from '../components/Joke';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/randomjoke/:category',
    component: Joke,
  }
];

export default routes;
