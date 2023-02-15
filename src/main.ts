import { createApp } from "vue";
import App from "./App.vue";

import { initPinia } from "@/store";
import { initRouter } from "@/router";
/*所有初始化样式*/
import "normalize.css";
// import "@/layout/styles/index.scss";
// import "@/layout/styles/background/light.scss";
// import "@/layout/styles/dark.scss";
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
