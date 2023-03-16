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
}
::v-deep().vea-right-main {
  margin-left: $vea-side-width;
  &.is-collapse {
    margin-left: $vea-side-min-width;
  }
  .vea-main {
  }
  &.is-fixed-header {
    .vea-main {
      height: calc(100vh - #{$vea-header-height});
    }
  }

  &.is-fixed-footer {
    .vea-main {
      //height: calc(100vh - #{$vea-footer-height});
      //margin-bottom: 60px;
      padding-bottom: 60px;
      .fixed-footer {
        //border: 3px solid red;
        position: fixed;
        bottom: 0;
        left: 260px;
        right: 37px;
        //width: 100%;
      }
    }
  }
}
</style>
