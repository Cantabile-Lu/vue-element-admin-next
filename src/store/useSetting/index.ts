import { defineStore } from "pinia";
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

/**
 * @description: 菜单展开变量
 * @date: 2023/1/10 11:16;
 */
const collapse = ref(false);
/**
 * @description: 左侧配置展开变量
 * @date: 2023/1/10 11:16;
 */
const settingDrawer = ref(false);
/**
 * @description: 是否是极夜模式
 * @date: 2023/1/17 10:37;
 */
const isDark = useDark({
  // attribute: "data-theme",
  storageKey: "theme",
  valueDark: "dark",
  valueLight: "light"
});

export const useSettingStore = defineStore("setting", () => {
  function collapseChange() {
    collapse.value = !collapse.value;
  }

  function settingDrawerChange() {
    settingDrawer.value = !settingDrawer.value;
  }

  async function setThemeHandler(theme = "light") {
    // const el = document.documentElement;
    // const module = await import(
    //   `../../layout/styles/theme/${theme}.module.scss`
    // );
    // Object.keys(module.default).forEach((key) => {
    //   if (key.startsWith("van-")) {
    //     el.setAttribute(
    //       "style",
    //       `${key.replace("van-", "el-")}: ${module.default[key]}`
    //     );
    //     // useCssVar(key.replace("van-", "el-"), ref(null)).value =
    //     //   module.default[key];
    //   }
    // });
  }

  /**
   * @description: 主题切换
   * @date: 2023/1/17 10:44;
   */
  function themeChange() {
    useToggle(isDark);
  }

  return {
    collapse,
    collapseChange,
    settingDrawer,
    settingDrawerChange,
    themeChange,
    isDark,
    setThemeHandler
  };
});
