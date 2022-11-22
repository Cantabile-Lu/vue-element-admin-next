import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { viteMockServe } from "vite-plugin-mock";

export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    viteMockServe({
      mockPath: "mock",
      injectCode: `
      import { setupProdMockServer } from './mock/index.ts';

      setupProdMockServer();
      `
    })
  ],

  server: {
    open: true
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
        // additionalData: "@import '@/styles/variable.less';"
      }
    }
  }
});
