import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {
  useRoutes,
  RouteObject,
  useNavigate,
  useLocation
} from 'react-router-dom';
import {RootState} from '../utils/store/index';
import Login from '@modules/auth/views/index';
import {setToken} from '../utils/store/slices/auth';
type RouteModule = {default: RouteObject[]};

const routesModules: Record<string, () => Promise<RouteModule>> =
  import.meta.glob('../../modules/**/routes.tsx') as Record<
    string,
    () => Promise<RouteModule>
  >;

const AppRoutes: React.FC = () => {
  const [routes, setRoutes] = useState<RouteObject[]>([]);
  const token = useSelector((state: RootState) => state.auth.token);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loadRoutes = async () => {
    const routesArray: RouteObject[] = [];
    for (const path in routesModules) {
      const module = await routesModules[path]();
      routesArray.push(...module.default);
    }
    setRoutes(routesArray);
  };
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'token') {
        dispatch(setToken(event.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [dispatch]);
  useEffect(() => {
    loadRoutes();
  }, []);
  useEffect(() => {
    if (!token && location.pathname !== '/login') {
      navigate('/login');
    }
    if (token && location.pathname === '/login') {
      navigate('/');
    }
  }, [token, location]);

  const authenticatedRoutes = routes.filter(route => route.path !== '/login');
  const unauthenticatedRoutes = [
    {path: '/login', element: <Login />},
    ...routes.filter(route => route.path === '/login')
  ];

  return useRoutes(token ? authenticatedRoutes : unauthenticatedRoutes);
};

export default AppRoutes;
