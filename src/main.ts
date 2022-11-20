import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "element-plus/theme-chalk/el-loading.css";
import { initStore } from "@/store";
import { initRouter } from "@/router";

import { vnRequest } from "@/utils/request";
vnRequest.request({
  url: "https://dog.ceo/api/breeds/image/random",
  method: "get"
  // interceptors: {
  //   responseInterceptor: (res) => {
  //     console.log(res);
  //     return res;
  //   }
  // }
});
function initApp() {
  const app = createApp(App);
  // init pinia
  initStore(app);
  // init vue-router
  initRouter(app);

  app.mount("#app");
}

initApp();
