import { defineStore } from "pinia";
import { ref } from "vue";

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

  function themeChange() {
    console.log("->27:index.ts", "点击了切换主题");
  }

  return {
    collapse,
    collapseChange,
    settingDrawer,
    settingDrawerChange,
    themeChange,
    setThemeHandler
  };
});
