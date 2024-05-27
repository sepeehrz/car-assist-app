/* eslint-disable react-refresh/only-export-components */
import {lazy} from 'react';
const AuthPage = lazy(() => import('./views/index'));

const authRoutes = [
  {
    path: '/login',
    element: <AuthPage />
  }
];

export default authRoutes;
