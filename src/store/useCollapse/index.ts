import { defineStore } from "pinia";
import { ref } from "vue";

export const useCollapse = defineStore("collapse", () => {
  const collapse = ref(false);
  function collapseChange() {
    collapse.value = !collapse.value;
  }
  return {
    collapse,
    collapseChange
  };
});
