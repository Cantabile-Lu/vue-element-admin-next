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
.common-layout {
  width: 100%;
  height: 100%;
  [class*="vea-horizontal-layout"] {
    .fixed {
      border: 3px solid blue;
      margin-top: $vea-header-height;
    }
  }
}
::v-deep().vea-right-main {
  //border: 1px solid red;
  margin-left: $vea-side-width;
  .is-fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    //border: 3px solid red;
  }
  &.is-collapse {
    margin-left: $vea-side-min-width;
    .is-fixed-header {
      width: $vea-right-main;
      //border: 3px solid blue;
    }
  }
}
</style>
