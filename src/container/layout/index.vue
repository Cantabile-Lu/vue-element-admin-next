<template>
  <div class="common-layout">
    <component :is="theme[active]" :collapse="collapse" />
  </div>
</template>

<script lang="ts" setup>
import VeaHorizontal from "./VeaHorizontal/index.vue";
import VeaRoutine from "./VeaRoutine/index.vue";
import { ref } from "vue";
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";

const theme = {
  VeaHorizontal,
  VeaRoutine
};
const active = ref("VeaRoutine");

const settingStore = useSettingStore();
const { collapse } = storeToRefs(settingStore);
settingStore.setThemeHandler("light");
</script>

<style lang="scss" scoped></style>
