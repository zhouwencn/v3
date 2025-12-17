import { createRouter, createWebHashHistory } from 'vue-router'
const Layouts = () => import('@/layouts/index.vue')
export const constantRoutes = [
  {
    path: '/',
    component: Layouts
  },
  // {
  //   path: '/403',
  //   component: () => import('@/layouts/index.vue'),
  //   meta: {
  //     hidden: true
  //   },
  //   childrend: [
  //     {
  //       path: 'test',
  //       component: () => import('@/layouts/index.vue')
  //     }
  //   ]
  // }
]

/** 路由实例 */
export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})
