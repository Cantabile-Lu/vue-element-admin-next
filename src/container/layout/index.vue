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
    section {
      min-height: calc($vea-base-min-height + 60px);
    }
  }

  &.is-fixed-header {
    .vea-main {
      height: calc(100vh - #{$vea-header-height});
    }
  }

  &.is-show-footer {
    .vea-main {
      section {
        min-height: $vea-base-min-height;
      }
    }
  }
}
</style>
