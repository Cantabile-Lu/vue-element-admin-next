import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"; // https://vitejs.dev/config/
import path, { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { viteMockServe } from "vite-plugin-mock";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import Unocss from "unocss/vite";

export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    vueJsx(),
    Components({
      resolvers: [ElementPlusResolver({})],
      dirs: ["src/container/components"],
      dts: "types/components.d.ts"
    }),
    viteMockServe({
      mockPath: "mock",
      injectCode: `
      import { setupProdMockServer } from './mock/index.ts';

      setupProdMockServer();
      `
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]"
    }),
    Unocss()
  ],

  server: {
    open: true
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~": resolve(__dirname, "."),
      "#": resolve(__dirname, "container")
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData(content: ClassDecorator, target: string) {
          if (
            target.indexOf("layout/styles/theme/variables.module.scss") === -1
          )
            return (
              '@use "@/layout/styles/theme/variables.module.scss" as *;' +
              content
            );
          return content;
        }
      }
    }
  }
});
