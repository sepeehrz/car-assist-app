/* eslint-disable react-refresh/only-export-components */
import {lazy} from 'react';
import DefaultLayout from '@app/ui/layout/Default/default';

const RepairsPage = lazy(() => import('./views/index'));
const OilFormPage = lazy(() => import('./views/services/oil'));
const EngineFormPage = lazy(() => import('./views/services/engine'));
const RepairFormPage = lazy(() => import('./views/services/repair'));

const repairsRoutes = [
  {
    path: '/repairs',
    element: <DefaultLayout />,
    children: [
      {path: '/repairs', element: <RepairsPage />},
      {path: '/repairs/services/oil', element: <OilFormPage />},
      {path: '/repairs/services/oil/:id', element: <OilFormPage />},
      {path: '/repairs/services/engine', element: <EngineFormPage />},
      {path: '/repairs/services/engine/:id', element: <EngineFormPage />},
      {path: '/repairs/services/others', element: <RepairFormPage />},
      {path: '/repairs/services/others/:id', element: <RepairFormPage />}
    ]
  }
];

export default repairsRoutes;
