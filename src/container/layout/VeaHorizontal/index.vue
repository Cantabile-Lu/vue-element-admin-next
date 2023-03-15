<template>
  <div class="vea-horizontal-layout" style="padding-top: 60px">
    <div class="vea-right-main">
      <vea-side />
    </div>
    <div :class="{ 'is-collapse': collapse }" class="vea-right-main">
      <div :class="{ 'is-fixed-header': isFixedHeader }">
        <vea-header />
      </div>
      <!--      <vea-main />-->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const isFixedHeader = ref(true);

const settingStore = useSettingStore();
const { collapse } = storeToRefs(settingStore);
</script>

<style lang="scss" scoped>
//$--side-width: 240px;
//$--side-margin: 10px;
//$--header-height: 60px;
//.vea-side {
//  border: 1px solid yellow;
//  position: fixed;
//  left: 0;
//  top: 0;
//  width: $--side-width;
//  height: 100vh;
//  box-sizing: border-box;
//  margin-right: $--side-margin;
//}
//
//.vea-main {
//  margin-left: calc($--side-width + $--side-margin);
//  margin-top: $--header-height;
//  border: 1px solid blue;
//  height: calc(100vh - $--header-height);
//  box-sizing: border-box;
//}
</style>
