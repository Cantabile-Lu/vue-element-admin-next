<template>
  <div class="Vea-layout-routine">
    <el-container>
      <el-aside
        :width="collapse ? setting.minWidth : setting.maxWidth"
        class="overscroll-x-none"
      >
        <VeaLogo v-if="setting.showLogo" />
        <VeaMenu />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <div>
          <el-main>
            main
            <VeaIcon name="area" />
          </el-main>
        </div>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";
import { usePermissionStore } from "@/store/usePermission";
// import variables from "../../styles/theme/variables.module.scss";
import setting from "@/config/index";
// import VeaLogo from "@/container/components/VeaLogo/VeaLogo.vue";

const settingStore = useSettingStore();
const { collapse } = storeToRefs(settingStore);
const { routes } = usePermissionStore();
</script>

<style lang="scss" scoped>
.Vea-layout-routine {
  height: 100%;
  display: grid;
  //grid-template-columns: 1fr 1fr;

  div {
    border: 1px solid red;
  }
}
</style>
