/* eslint-disable react-refresh/only-export-components */
import {lazy} from 'react';
import DefaultLayout from '@app/ui/layout/Default/default';

const RepairsPage = lazy(() => import('./views/index'));
const OilFormPage = lazy(() => import('./views/services/oil'));

const repairsRoutes = [
  {
    path: '/repairs',
    element: <DefaultLayout />,
    children: [
      {path: '/repairs', element: <RepairsPage />},
      {path: '/repairs/services/oil', element: <OilFormPage />},
      {path: '/repairs/services/oil/:id', element: <OilFormPage />}
    ]
  }
];

export default repairsRoutes;
