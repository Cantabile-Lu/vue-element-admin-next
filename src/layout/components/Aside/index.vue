<template>
  <el-aside
    :width="collapse ? setting.minWidth : setting.maxWidth"
    class="overscroll-x-none"
  >
    <Logo v-if="setting.showLogo" />
    <div class="sidebar">
      <el-menu
        :collapse="collapse"
        :collapse-transition="false"
        :default-active="$route.path"
      >
        <template v-for="item in routes" :key="item.path">
          <Sidebar v-if="!item.meta.hidden" :item="item" />
        </template>
      </el-menu>
    </div>
  </el-aside>
</template>

<script lang="ts" setup>
import { Logo, Sidebar } from "@/layout/components";
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";
import setting from "@/config/index";
import { usePermissionStore } from "@/store/usePermission";
// import variables from "../../styles/theme/variables.module.scss";

const settingStore = useSettingStore();
const { collapse } = storeToRefs(settingStore);
const { routes } = usePermissionStore();
</script>

<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  box-sizing: border-box;
  transition: width 0.3s;
  overflow: hidden;
  background-color: var(--el-menu-bg-color);
}

.el-menu {
  border-right: 0;
}

.sidebar {
  transition: all 0.3s;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  position: relative;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
