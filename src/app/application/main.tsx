import App from './app';
import React from 'react';
import '@app/ui/assets/style/app.scss';
import ReactDOM from 'react-dom/client';
import AxiosInstance from '../helpers/axios/axios';
import AxiosContext from '../utils/context/axiosContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AxiosContext.Provider value={AxiosInstance}>
      <App />
    </AxiosContext.Provider>
  </React.StrictMode>
);
