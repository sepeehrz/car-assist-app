/* eslint-disable react-refresh/only-export-components */
import {lazy} from 'react';
import DefaultLayout from '@app/ui/layout/Default/default';

const ProfilePage = lazy(() => import('./views/index'));

const profileRoutes = [
  {
    path: '/profile',
    element: <DefaultLayout />,
    children: [{path: '/profile', element: <ProfilePage />}]
  }
];

export default profileRoutes;
