<template>
  <div class="vea-main">
    <section>
      <VeaRouterView />
    </section>
    <div v-if="isFixedFooter" class="fixed-footer">
      <Vea-footer />
    </div>
  </div>
</template>

<script setup>
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";

const settingStore = useSettingStore();
const { isFixedFooter } = storeToRefs(settingStore);
</script>

<style lang="scss" scoped>
.vea-main {
  //padding: 20px;
  //
  //section {
  //  padding: 20px;
  //  background: #fff;
  //  border-radius: 5px;
  //}
  //
  //.fixed-footer {
  //  background: #fff;
  //  position: relative;
  //
  //  &::after {
  //    content: "";
  //    position: absolute;
  //    top: 0;
  //    width: 100%;
  //    border-top: 1px dashed green;
  //  }
  //}
}
</style>
