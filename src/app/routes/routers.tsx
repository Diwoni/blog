import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PATH } from './path';
import { MainPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <MainPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
