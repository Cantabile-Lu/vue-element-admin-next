<template>
  <div class="vea-header">
    <Expand />
    <div class="vea-setting" @click="settingHandler">👍</div>
  </div>
</template>

<script lang="ts" setup>
import Expand from "./VeaExpand";
import { useSettingStore } from "@/store/useSetting";

const settingStore = useSettingStore();
console.log("->15:VeaIcon.vue", settingStore);
const { settingDrawerChange } = settingStore;
const settingHandler = () => {
  console.log("点击了");
  settingDrawerChange();
};
</script>

<style lang="scss" scoped>
@import "@/container/styles/variable.scss";

.vea-header {
  height: $vea-header-height;
  border: 1px solid red;
  width: 100%;
  //margin-left: $vea-side-width;
  //display: flex;
  //align-items: center;
  //justify-content: space-between;
}
</style>
