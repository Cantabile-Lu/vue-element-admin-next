<template>
  <el-aside :width="collapse ? setting.minWidth : setting.maxWidth">
    <el-scrollbar>
      <Logo v-if="setting.showLogo" class="fixed-logo" />
      <div v-if="setting.showLogo" style="height: 60px"></div>
      <div class="sidebar">
        <Sidebar />
      </div>
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts" setup>
import "element-plus/theme-chalk/base.css";
import { Logo, Sidebar } from "@/layout/components";
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";
import setting from "@/config/index";

const settingStore = useSettingStore();
const { collapse } = storeToRefs(settingStore);
</script>

<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  box-sizing: border-box;
  transition: width 0.3s;
  background: $base-menu-background;
}

.sidebar {
  transition: width 0.3s;
  width: 100%;
  background: $base-menu-background;
  box-sizing: border-box;
  overflow-x: hidden;
  position: relative;
}

.fixed-logo {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
