<template>
  <div class="vea-setting">
    <el-drawer v-model="settingDrawer" title="系统设置">
      <div>
        <el-switch v-model="isDark" @change="themeHandler" />
      </div>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";

const settingStore = useSettingStore();
const { settingDrawer, isDark } = storeToRefs(settingStore);
const { themeChange } = settingStore;
const themeHandler = () => {
  themeChange();
};
</script>

<style lang="scss" scoped>
.vea-setting {
}
</style>
