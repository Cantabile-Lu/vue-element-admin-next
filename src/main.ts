import { createApp } from "vue";
import App from "./App.vue";
import "virtual:svg-icons-register";
// import "element-plus/theme-chalk/el-loading.css";
import { initStore } from "@/store";
import { initRouter } from "@/router";

import "@/layout/styles/index.scss";
import "normalize.css";
import "animate.css";
import "uno.css";

// import ElementPlus from "element-plus";

function initApp() {
  const app = createApp(App);
  // init pinia
  initStore(app);
  // init vue-router
  initRouter(app);
  // app.use(ElementPlus);
  app.mount("#app");
}

initApp();
