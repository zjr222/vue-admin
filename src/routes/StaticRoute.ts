const staticRouter = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/Login.vue'),
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/pages/404/index.vue'),
    },
]
export default staticRouter
