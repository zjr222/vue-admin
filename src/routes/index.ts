import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()
import NProgress from 'nprogress' // 加载进度条
import 'nprogress/nprogress.css'
import { routes } from './Routes'
import { useLoginState } from '../store'
const router = createRouter({
  history: routerHistory, //路由模式
  routes,
})

router.beforeEach(async (to, from, next) => {
  // 开启进度条
  NProgress.start()
  if (useLoginState().isLogin) {
    // 已登录
    if (to.path === '/login') {
      next({
        name: 'main',
      })
    }
    next()
  } else {
    // 未登录
    if (to.path === '/login') next()
    next({
      name: 'login',
    })
  }
})
router.afterEach((to, from) => {
  // 关闭进度条
  NProgress.done()
})
export default router
