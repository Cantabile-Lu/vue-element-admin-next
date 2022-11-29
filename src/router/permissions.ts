import type { Router } from "vue-router";

export const setupPermissions = (router: Router) => {
  router.beforeEach((to, from, next) => {
    next();
  });
};
