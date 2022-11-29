import { defineStore } from "pinia";
import { ref } from "vue";

const collapse = ref(false);

const title = "你好~ admin-next";
export const useSettingStore = defineStore("setting", () => {
  function collapseChange() {
    collapse.value = !collapse.value;
  }

  return {
    collapse,
    collapseChange
  };
});
