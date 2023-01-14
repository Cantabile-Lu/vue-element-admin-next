import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from "vue";
import { setupPermissions } from "./permissions";
import Layout from "@/layout/index.vue";
import { RouteRecord } from "@/types/route";

/**
 * path: 路径
 * name: 名称
 * alwaysShow: Boolean 是否总是显示根组件
 * meta: {
 *
 * }
 */
export const constantRoutes: RouteRecord[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/",
    name: "Dashboard",
    component: Layout,
    alwaysShow: true,
    meta: {
      title: "仪表盘",
      icon: "dashboard"
    },
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          title: "仪表盘"
        }
      }
    ]
  },
  {
    path: "/details",
    name: "Details",
    redirect: "/details",
    component: Layout,
    meta: {
      title: "路由器",
      icon: "area"
    },
    children: [
      {
        name: "Details1",
        path: "/details1",
        component: () => import("@/views/details/index.vue"),
        meta: {
          title: "菜单1"
        }
      },
      {
        name: "Details2",
        path: "/details2",
        component: () => import("@/views/login/index.vue"),
        meta: {
          title: "菜单2"
        }
      }
    ]
  }
];
export const asyncRoutes: RouteRecordRaw[] = [
  // {
  //   path: "/details",
  //   redirect: "/details",
  //   component: Layout,
  //   meta: {
  //     name: "详情",
  //     title: "详情"
  //   },
  //   children: [
  //     {
  //       path: "/details",
  //       component: () => import("@/views/details/index.vue")
  //     }
  //   ]
  // }
];
export const router = createRouter({
  routes: constantRoutes as RouteRecordRaw[],
  history: createWebHashHistory()
});

export function initRouter(app: App<Element>) {
  // 路由拦截
  setupPermissions(router);
  app.use(router);
  return router;
}
