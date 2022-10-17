import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import type { App } from "vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue")
      }
    ]
  }
];
export const router = createRouter({
  routes,
  history: createWebHashHistory()
});

// router.beforeEach((to) => {
//   if (to.path !== "/login") {
//     console.log("不是去登录页面");
//   }
// });
export function initRouter(app: App<Element>) {
  app.use(router);
}
