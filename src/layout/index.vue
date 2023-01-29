<template>
  <div class="common-layout">
    <component :is="theme[active]" :collapse="collapse" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import defaultTheme from "./theme/default/index.vue";
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";

const theme = {
  defaultTheme
};
const active = ref("defaultTheme");

const settingStore = useSettingStore();
const { collapse } = storeToRefs(settingStore);
settingStore.setThemeHandler();
</script>

<style lang="scss" scoped></style>
