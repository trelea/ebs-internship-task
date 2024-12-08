import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RouteFallback from './RouteFallback';

const sleep = (time: number): Promise<any> =>
  new Promise((resolve) => setTimeout(resolve, time));

const Cart = React.lazy(() => sleep(250).then(() => import('@/pages/Cart')));
const Home = React.lazy(() => sleep(250).then(() => import('@/pages/Home')));
const NotFound = React.lazy(() =>
  sleep(500).then(() => import('@/pages/NotFound'))
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RouteFallback>
        <Home />
      </RouteFallback>
    ),
  },
  {
    path: '/cart',
    element: (
      <RouteFallback>
        <Cart />
      </RouteFallback>
    ),
  },
  {
    path: '*',
    element: (
      <RouteFallback>
        <NotFound />
      </RouteFallback>
    ),
  },
]);
