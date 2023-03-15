<template>
  <el-menu
    :collapse="collapse"
    :collapse-transition="false"
    :default-active="$route.path"
  >
    <template v-for="item in routes" :key="item.path">
      <VeaMenuSubItem v-if="!item.meta.hidden" :item="item" />
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";
import { usePermissionStore } from "@/store/usePermission";

const settingStore = useSettingStore();
const { collapse } = storeToRefs(settingStore);
const { routes } = usePermissionStore();
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: 0;
}

//
//.sidebar {
//  transition: all 0.3s;
//  width: 100%;
//  box-sizing: border-box;
//  overflow-x: hidden;
//  position: relative;
//}
</style>
