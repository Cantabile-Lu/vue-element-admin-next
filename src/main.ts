import { createApp } from "vue";
import App from "./App.vue";

import { initPinia } from "@/store";
import { initRouter } from "@/router";
import "@/container/index";
/*所有初始化样式*/
import "uno.css";

function initApp() {
  const app = createApp(App);
  /*初始化pinia*/
  initPinia(app);
  /*初始化Router*/
  initRouter(app);
  /*初始化layout*/
  // initVeaLayout(app);
  /*挂载app*/
  app.mount("#app");
}

initApp();
