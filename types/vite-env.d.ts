/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare const $ref = any;

declare module "@originjs/vite-plugin-require-context" {}

// test
