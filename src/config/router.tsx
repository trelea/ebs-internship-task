import Cart from '@/pages/Cart';
import Home from '@/pages/Home';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/cart', element: <Cart /> },
]);
