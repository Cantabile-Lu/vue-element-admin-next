import { defineStore } from "pinia";
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

/**
 * @description: 菜单展开变量
 * @date: 2023/1/10 11:16;
 */
const collapse = ref(false);
/**
 * @description: 是否固定header
 * @date: 2023/3/15 22:09;
 */
const isFixedHeader = ref(true);
/**
 * @description: 是否固定footer
 * @date: 2023/3/16 13:25;
 */
const isFixedFooter = ref(true);
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
  storageKey: "theme",
  valueDark: "dark",
  valueLight: "light"
});

export const useSettingStore = defineStore("setting", () => {
  // todo 数据可存储本地, 进行缓存
  function collapseChange() {
    collapse.value = !collapse.value;
  }

  function setFixedHeader() {
    isFixedHeader.value = !isFixedHeader.value;
  }

  function setFixedFooter() {
    isFixedFooter.value = !isFixedFooter.value;
  }

  function settingDrawerChange() {
    settingDrawer.value = !settingDrawer.value;
  }

  async function setThemeHandler(theme?: string) {
    // if (!theme) return;
    // const module = await import(
    //   `../../layout/styles/theme/${theme}.module.scss`
    // );
    // Object.keys(module.default).forEach((key) => {
    //   if (key.startsWith("van-")) {
    //     useCssVar(key.replace("van-", "--el-"), ref(null)).value =
    //       module.default[key];
    //   }
    // });
    //
    // document.body.setAttribute("class", `van-theme-${theme}`);
  }

  /**
   * @description: 主题切换
   * @date: 2023/1/17 10:44;
   */
  function themeChange() {
    useToggle(isDark);
    if (isDark.value) {
      setThemeHandler("default").then(() => {});
    }
  }

  return {
    collapse,
    collapseChange,
    settingDrawer,
    settingDrawerChange,
    themeChange,
    isDark,
    setThemeHandler,
    isFixedHeader,
    setFixedHeader,
    isFixedFooter,
    setFixedFooter
  };
});
