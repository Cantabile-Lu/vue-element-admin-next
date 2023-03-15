import { App } from "vue";

/*加载动画库*/
import "animate.css";
import "normalize.css";

/*加载svg-icon*/
import "virtual:svg-icons-register";
/*样式初始化*/
import "./styles/index.scss";

/*组件加载:
  components内组件通过unplugin-vue-components加载,无需自己注册
*/
export const initVeaLayout = (app: App<Element>) => {
  // const components = import.meta.glob("./components/*/*.vue");
  // console.log("-> components", components);
  // for (const path in components) {
  //   const result: RegExpMatchArray = path.match(/^.*\/([^/]+?)\.vue$/)!;
  //   const component: any = components[path];
  //   app.component(result[1], defineAsyncComponent(component));
  // }
};
