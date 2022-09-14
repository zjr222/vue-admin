export const navRoutes = [
    // {
    //     path: '/archives',
    //     name: '404',
    //     meta: { singlePage: false },
    //     component: () => import('@/pages/404/index.vue'),
    // },
]

export const dynaimcRoutes = [
    {
        path: '/',
        name: 'main',
        exact: true,
        redirect: { name: 'home' },
        meta: { title: "首页", requireAuth: true, singlePage: false },
        children: [
            {
                path: '/home',
                name: 'home',
                meta: { requireAuth: true, },
                component: () => import('@/pages/Home/index.vue'),
            }
        ],
    },
    // {
    //     path: '/archives',
    //     name: 'archives',
    //     meta: { singlePage: false },
    //     component: () => import('@/pages/archives/index.vue'),
    // },
    // {
    //     path: '/tag',
    //     name: 'tag',
    //     meta: { singlePage: false },
    //     component: () => import('@/pages/tag/index.vue'),
    // },
    // {
    //     path: '/about',
    //     name: 'about',
    //     meta: { singlePage: false },
    //     component: () => import('@/pages/about/index.vue'),
    // },
    // {
    //     path: '/links',
    //     name: 'links',
    //     meta: { singlePage: false },
    //     component: () => import('@/pages/links/index.vue'),
    // },
    // {
    //     path: '/404',
    //     name: '404',
    //     meta: { singlePage: false },
    //     component: () => import('@/pages/404/index.vue'),
    // },
]

export const staticRoutes = [
    {
        path: '/login',
        name: 'login',
        exact: true,
        meta: { singlePage: true },
        component: () => import('@/pages/Login.vue'),
    },
]
