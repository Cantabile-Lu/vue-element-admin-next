<template>
  <div class="vea-horizontal-layout">
    <div class="">
      <vea-side />
    </div>
    <div
      :class="{
        'is-collapse': collapse,
        'is-fixed-header': isFixedHeader,
        'is-fixed-footer': isFixedFooter
      }"
      class="vea-right-main"
    >
      <vea-header />
      <div class="vea-main-container">
        <vea-main />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/**
 * 显示且定位footer 则main减去footer高度
 * 隐藏footer 则 保持main高度
 * 显示且不定位footer 则 保持main高度
 * */
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";

// const isFixedHeader = ref(true);
// const isFixedFooter = ref(true);

const settingStore = useSettingStore();
const { collapse, isFixedHeader, isFixedFooter } = storeToRefs(settingStore);
</script>

<style lang="scss" scoped></style>
