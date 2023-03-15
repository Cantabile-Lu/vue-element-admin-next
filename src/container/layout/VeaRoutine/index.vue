<template>
  <el-container class="layout-container-demo" style="height: 100vh">
    <el-aside :width="!collapse ? '260px' : '64px'">
      <vea-logo />
      <vea-menu />
    </el-aside>

    <el-container>
      <el-header>
        <vea-header />
      </el-header>

      <el-scrollbar>
        <el-main>
          <vea-main />
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";
import VeaHeader from "@/container/components/VeaHeader/VeaHeader.vue";
import VeaMain from "@/container/components/VeaMain/VeaMain.vue";

const settingStore = useSettingStore();
const { collapse } = storeToRefs(settingStore);
</script>

<style lang="scss" scoped>
.Vea-layout-routine {
  height: 100%;
  //display: grid;
  //grid-template-columns: 1fr 1fr;

  div {
    //border: 1px solid red;
    box-sizing: border-box;
  }
}

.el-main {
  height: calc(100vh - 60px);
}

.el-header {
  padding: 0 10px;
}
</style>
