/* eslint-disable react-refresh/only-export-components */
import {lazy} from 'react';
import DefaultLayout from '@app/ui/layout/Default/default';

const HomePage = lazy(() => import('./views/index'));

const homeRoutes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [{path: '/', element: <HomePage />}]
  }
];

export default homeRoutes;
