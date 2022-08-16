import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()
import NProgress from 'nprogress' // 加载进度条
import 'nprogress/nprogress.css'
import { dynaimcRoutes, staticRoutes } from './Routes'
const router = createRouter({
    history: routerHistory, //路由模式
    routes: [...dynaimcRoutes, ...staticRoutes]
})

router.beforeEach((to, from, next) => {
    // 开启进度条
    NProgress.start()
    // if (to.matched.some((auth) => auth.meta.requireAuth)) {
    //     if (sessionStorage.getItem('login')) {
    //         // 已登录
    //         next()
    //     } else {
    //         next({
    //             path: './login'
    //         })
    //     }
    // }
    next()
})
router.afterEach((to, from) => {
    // 关闭进度条
    NProgress.done()
})
export default router
