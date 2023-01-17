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
const darkFlag = ref(false);
const isDark = useDark({
  storageKey: "theme",
  valueDark: "dark",
  // 高亮class名字
  valueLight: "light"
});

export const useSettingStore = defineStore("setting", () => {
  function collapseChange() {
    collapse.value = !collapse.value;
  }

  function settingDrawerChange() {
    settingDrawer.value = !settingDrawer.value;
  }

  function setThemeHandler(theme = "default") {
    document.getElementsByTagName("body")[0].setAttribute("data-theme", theme);
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
