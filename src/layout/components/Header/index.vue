<template>
  <div>
    <el-header>
      <Expand />
      <div class="vea-setting" @click="settingHandler">👍</div>
    </el-header>
    <SettingDrawer />
  </div>
</template>

<script lang="ts" setup>
import Expand from "./expand";
import SettingDrawer from "@/components/Setting/setting.vue";
import { useSettingStore } from "@/store/useSetting";

const settingStore = useSettingStore();
console.log("->15:index.vue", settingStore);
const { settingDrawerChange } = settingStore;
const settingHandler = () => {
  console.log("点击了");
  settingDrawerChange();
};
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0 10px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vea-setting {
  cursor: pointer;
}
</style>
