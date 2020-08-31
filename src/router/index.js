import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export const constantRoutes = [
  // 学习首页
  {
    path: '/',
    component: () => import('@/views/learn/index')
  },
  {
    path: '/css',
    component: () => import('@/views/learn/css/index')
  }, {
    path: '/javascript',
    component: () => import('@/views/learn/js/index')
  }, {
    path: '/vue',
    component: () => import('@/views/learn/vue/index')
  }, {
    path: '/jdhome',
    component: () => import('@/views/learn/project_one/JDHome')
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
