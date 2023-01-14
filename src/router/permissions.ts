import type { Router } from "vue-router";
import { usePermissionStore } from "@/store/usePermission";

export const setupPermissions = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    const { routes, setRoutes } = usePermissionStore();
    if (routes.length) {
      console.log("禁止一些行为");
    } else {
      await setRoutes();
    }

    next();
  });
};
