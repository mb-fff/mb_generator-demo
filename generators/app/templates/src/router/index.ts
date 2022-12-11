import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { isAuth } from '../utils/login'
import { Storage } from '../utils/storage'

const storageS = new Storage('session')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: { title: '首页', requireAuth: true },
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/:catchAll(.*)',
    meta: { title: '404' },
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 前置路由拦截器
// router.beforeEach((to, from, next) => {

//   if (to.meta.requireAuth) {
//     const session = storageS.get('session')
//     session ? next() : isAuth()
//   } else {
//     next()
//   }
// })

// 后置路由拦截器
router.afterEach((to, from) => {
  if (to.path) {
    document.title = (to.meta.title as string) || '示例项目'
  }
})

export default router
