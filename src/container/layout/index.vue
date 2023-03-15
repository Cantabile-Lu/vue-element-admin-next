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
const active = ref("VeaHorizontal");

const settingStore = useSettingStore();
const { collapse } = storeToRefs(settingStore);
settingStore.setThemeHandler("light");
</script>

<style lang="scss" scoped>
@import "@/container/styles/variable.scss";
::v-deep().vea-right-main {
  border: 1px solid red;
  margin-left: $vea-side-width;
  &.is-collapse {
    margin-left: $vea-side-min-width;
  }
}
</style>
