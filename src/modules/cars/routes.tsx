/* eslint-disable react-refresh/only-export-components */
import {lazy} from 'react';
import DefaultLayout from '@app/ui/layout/Default/default';

const UpsertPage = lazy(() => import('./views/upsert'));
const ListPage = lazy(() => import('./views/list'));

const carsRoutes = [
  {
    path: '/cars',
    element: <DefaultLayout />,
    children: [
      {path: '/cars', element: <ListPage />},
      {path: '/cars/add', element: <UpsertPage />},
      {path: '/cars/:id', element: <UpsertPage />}
    ]
  }
];

export default carsRoutes;
