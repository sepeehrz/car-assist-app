const routes = [
  {
    path: '/login',
    async lazy() {
      const Login = await import('@modules/auth/views/index');
      return {Component: Login.default};
    }
  },
  {
    async lazy() {
      const DefaultLayout = await import('@app/ui/layout/Default/default');
      return {Component: DefaultLayout.default};
    },
    children: [
      {
        index: true,
        path: '/',
        async lazy() {
          const Home = await import('@modules/home/views/index');
          return {Component: Home.default};
        }
      },
      {
        path: 'profile',
        async lazy() {
          const Home = await import('@modules/profile/views/index');
          return {Component: Home.default};
        }
      },
      {
        path: 'cars',
        async lazy() {
          const Home = await import('@modules/cars/views/list');
          return {Component: Home.default};
        }
      },
      {
        path: 'cars/add',
        async lazy() {
          const Home = await import('@modules/cars/views/upsert');
          return {Component: Home.default};
        }
      },
      {
        path: 'repairs',
        async lazy() {
          const Home = await import('@modules/repairs/views/index');
          return {Component: Home.default};
        }
      },
      {
        path: 'repairs/services/oil',
        async lazy() {
          const Home = await import('@modules/repairs/views/services/oil');
          return {Component: Home.default};
        }
      }
    ]
  }
];

export default routes;
