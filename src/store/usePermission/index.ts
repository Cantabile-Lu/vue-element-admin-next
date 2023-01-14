import { defineStore } from "pinia";
import { asyncRoutes, constantRoutes } from "@/router";

interface PermissionState {
  routes: [];
  activeMenu: object;
}

function filterRoutes(routes: any) {
  return routes;
}

export const usePermissionStore = defineStore("permission", {
  state: (): PermissionState => {
    return {
      routes: [],
      /**
       * @description: activeMenu 默认选中菜单
       * @date: 2023/1/9 10:41;
       */
      activeMenu: {
        data: "/index"
      }
    };
  },
  getters: {
    getRoutes: (state) => {
      return state.routes;
    },
    getActiveMenu: (state) => state.activeMenu
  },
  actions: {
    setRoutes() {
      const accessRoutes = filterRoutes([...constantRoutes, ...asyncRoutes]);
      this.routes = JSON.parse(JSON.stringify(accessRoutes));
    }
  }
});
