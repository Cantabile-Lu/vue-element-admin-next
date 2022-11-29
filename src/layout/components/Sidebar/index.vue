<template>
  <el-menu
    :active-text-color="variables['menu-color-active']"
    :background-color="variables['menu-background']"
    :collapse="collapse"
    :collapse-transition="false"
    :text-color="variables['menu-color']"
    class="el-menu-vertical-demo"
    default-active="2"
    menu-trigger="click"
  >
    <template>
      <span>234</span>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import variables from "../../styles/variables.module.scss";
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";

const settingStore = useSettingStore();
const { collapse } = storeToRefs(settingStore);
</script>

<style lang="scss" scoped>
.el-menu {
  border: none;
}
</style>
