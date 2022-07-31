import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()
import NProgress from 'nprogress' // 加载进度条
import 'nprogress/nprogress.css'
import StaticRoute from './StaticRoute' // 独立页面
import DynamicRoute from './DynamicRoute' //模块路由(基于主入口布局页面)
// import * as user from "@/api/user"; //请求api,获取菜单
import Main from '@/Layout/Main.vue' // 导入动态路由父路由
const router = createRouter({
    history: routerHistory, //路由模式
    routes: [
        ...StaticRoute,  //注册静态路由
        ...DynamicRoute //注册动态路由入住路由
    ]
})


// 格式化路由 //将后台返回的路由注册到router中（根据自己后台返回结构数据自己定义，仅做参考）
// export function formatRouter(data: []) {
//     return data.map((item: any) => {
//         let i = 0
//         const route = {
//             name: item.path || `l-${item.id}`,
//             path: '',
//             component: '',
//             meta: {
//                 title: item.name,
//                 iframeURL: '',
//                 icon: item.icon,
//                 level: i += 1
//             },
//             redirect: '',
//             children: []
//         } as any
//         // if (isURL(item.path)) {
//         //     route['name'] = 'iframeURL-' + item.id
//         //     route['path'] = item.path
//         //     route['meta']['iframeURL'] = item.path
//         // } else {
//         //     route['path'] = item.path === '' ? `/l-${item.id}` : item.path
//         //     route['component'] = item.path === '' ? Main : () => import(`../${item.component}.vue`)
//         //     route['isMain'] = item.path === '' ? false : true
//         // }
//         if (item.children && item.children.length > 0) {
//             route.children = formatRouter(item.children)
//         }
//         return route
//     })
// }
router.beforeEach((to, from, next) => {
    // 开启进度条
    NProgress.start()
    //解决子路由刷新出现空白
    // if (useStore.getters.permissions.length === 0) {
    //     user.getList().then((res: any) => {
    //         const Router = formatRouter(res)
    //         useStore.commit('SET_PERMISSIONS', Router)
    //         console.log(Router);
    //         Router.forEach(item => {
    //             if (item.isMain) {
    //                 router.addRoute('main', item)
    //             } else {
    //                 router.addRoute(item)
    //             }
    //         })
    //         // 如果 addRoute 并未完成，路由守卫会一层一层的执行执行，直到 addRoute 完成，找到对应的路由
    //         next({ ...to, replace: true })
    //     })
    //     next({ ...to, replace: true })
    // } else {
    next()
    // }
})
router.afterEach((to, from) => {
    // 关闭进度条
    NProgress.done()
})
export default router
