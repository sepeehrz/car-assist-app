import React from 'react';
import axiosInstance from '../../helpers/axios/axios';

const AxiosContext = React.createContext(axiosInstance);

export default AxiosContext;
