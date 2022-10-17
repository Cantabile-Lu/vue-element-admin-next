import { createApp } from "vue";
import App from "./App.vue";

import { initStore } from "@/store";

function initApp() {
  const app = createApp(App);
  // init pinia
  initStore(app);

  app.mount("#app");
}

initApp();
