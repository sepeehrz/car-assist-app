import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import '@app/ui/assets/style/app.scss';
import routes from '../router/routes';
import AxiosContext from '../utils/context/axiosContext';
import AxiosInstance from '../helpers/axios/axios';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AxiosContext.Provider value={AxiosInstance}>
      <RouterProvider router={router} />
    </AxiosContext.Provider>
  </React.StrictMode>
);
