<template>
  <el-scrollbar :class="{ 'is-collapse': collapse }" class="vea-side">
    <vea-logo />
    <vea-menu />
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";

const settingStore = useSettingStore();
const { collapse } = storeToRefs(settingStore);
</script>

<style lang="scss" scoped>
@import "@/container/styles/variable.scss";

.vea-side {
  border: 1px solid red;
  position: fixed;
  left: 0;
  top: 0;
  width: $vea-side-width;
  z-index: -1;

  &.is-collapse {
    width: 60px;
    border: 1px solid blue;
  }
}
</style>
