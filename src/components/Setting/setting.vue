<template>
  <div class="vea-setting">
    <el-drawer v-model="settingDrawer" title="系统设置">
      <div>
        <el-switch v-model="isDark" @change="themeHandler" />
      </div>

      <div class="flex">
        <div
          v-for="item in themes"
          :key="item.id"
          class="mr-2 theme-color"
          @click="setTheme(item)"
        >
          {{ item.name }}
        </div>
      </div>

      <el-row :gutter="20" class="mt-10px">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </el-row>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";

const settingStore = useSettingStore();
const { settingDrawer, isDark } = storeToRefs(settingStore);
const { themeChange, setThemeHandler } = settingStore;
const themeHandler = () => {
  themeChange();
};

interface ITheme {
  id: number;
  theme: string;
  name: string;
}

const setTheme = (item: ITheme) => {
  setThemeHandler(item.theme);
};
const themes = [
  { id: 2, theme: "light", name: "月光白" },
  { id: 3, theme: "black", name: "极夜黑" },
  { id: 4, theme: "green", name: "春色绿" }
];
</script>

<style lang="scss" scoped>
.theme-color {
  color: var(text-color);
}
</style>
