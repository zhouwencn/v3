import type { RouteRecordRaw } from "vue-router"
import { createRouter, createWebHashHistory } from "vue-router"

const Layouts = () => import("@/layouts/index.vue")
export const constantRoutes = [
  {
    path: "/",
    component: Layouts
  }
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

/**
 * @name 动态路由
 * @description 用来放置有权限 (Roles 属性) 的路由
 * @description 必须带有唯一的 Name 属性
 */
export const dynamicRoutes: RouteRecordRaw[] = [
  // {
  //   path: "/permission",
  //   component: Layouts,
  //   redirect: "/permission/page-level",
  //   name: "Permission",
  //   meta: {
  //     title: "权限演示",
  //     elIcon: "Lock",
  //     // 可以在根路由中设置角色
  //     roles: ["admin", "editor"],
  //     alwaysShow: true
  //   },
  //   children: [
  //     {
  //       path: "page-level",
  //       component: () => import("@/pages/demo/permission/page-level.vue"),
  //       name: "PermissionPageLevel",
  //       meta: {
  //         title: "页面级",
  //         // 或者在子路由中设置角色
  //         roles: ["admin"]
  //       }
  //     },
  //     {
  //       path: "button-level",
  //       component: () => import("@/pages/demo/permission/button-level.vue"),
  //       name: "PermissionButtonLevel",
  //       meta: {
  //         title: "按钮级",
  //         // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
  //         roles: undefined
  //       }
  //     }
  //   ]
  // }
]

/** 路由实例 */
export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})
