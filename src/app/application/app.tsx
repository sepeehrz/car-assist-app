import {Suspense} from 'react';
import AppRoutes from './appRoutes';
import {Provider} from 'react-redux';
import store from '../utils/store/index';
import {BrowserRouter} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
