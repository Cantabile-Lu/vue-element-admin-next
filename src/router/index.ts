import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from "vue";
import { setupPermissions } from "./permissions";
import Layout from "@/layout/index.vue";

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/",
    redirect: "/dashboard",
    component: Layout,
    meta: {
      name: "仪表盘"
    },
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue")
      }
    ]
  }
];
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "details",
    redirect: "/details",
    component: Layout,
    meta: {
      name: "详情"
    },
    children: [
      {
        path: "details",
        component: () => import("@/views/details/index.vue")
      }
    ]
  }
];
export const router = createRouter({
  routes: constantRoutes,
  history: createWebHashHistory()
});

export function initRouter(app: App<Element>) {
  // 路由拦截
  setupPermissions(router);
  app.use(router);
  return router;
}
