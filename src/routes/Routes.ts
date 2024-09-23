export const routes = [
  {
    path: '/',
    name: 'main',
    exact: true,
    redirect: { name: 'login' },
    meta: { title: '首页', requireAuth: true, singlePage: false },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { requireAuth: true },
        component: () => import('@/pages/Home/index.vue'),
      },
      {
        path: '/login',
        name: 'login',
        exact: true,
        meta: { singlePage: true },
        component: () => import('@/pages/Login.vue'),
      }
    ],
  },
]
