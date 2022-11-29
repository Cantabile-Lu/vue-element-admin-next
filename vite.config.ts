import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"; // https://vitejs.dev/config/
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { viteMockServe } from "vite-plugin-mock";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    vueJsx(),
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
      scss: {
        javascriptEnabled: true,
        additionalData(content: ClassDecorator, target: string) {
          console.log();
          if (target.indexOf("layout/styles/variables.module.scss") === -1)
            return (
              '@import "../src/layout/styles/variables.module.scss";' + content
            );
          return content;
        }
      }
    }
  }
});
