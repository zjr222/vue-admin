const DynamicRoute = [
    {
        path: '/',
        name: 'main',
        component: () => import('@/pages/Layout.vue'),
        redirect: { name: 'home' },
        meta: { title: "首页" },
        children: [
            {
                name: 'home',
                path: '/home',
                component: () => import('@/pages/Home/index.vue'),
            }
        ],
    },
]
export default DynamicRoute
