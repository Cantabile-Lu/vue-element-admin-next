//  mockProdServer.ts
import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";

// const modules = import.meta.glob("*");
// console.log("->5:index.ts", modules);
// const mockModules: any[] = [];
// Object.keys(modules).forEach((key) => {
//   if (key.includes("/_")) {
//     return;
//   }
//   mockModules.push(...modules[key].default);
// });

import loginModules from "./login/index";

export function setupProdMockServer() {
  createProdMockServer([...loginModules]);
}
