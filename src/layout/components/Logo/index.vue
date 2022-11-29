<template>
  <router-link to="/">
    <div
      :style="{ width: collapse ? setting.minWidth : setting.maxWidth }"
      class="logo"
    >
      <img alt="logo" src="../../../../public/vite.svg" />
      <div v-show="!collapse" class="title">{{ setting.title }}</div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";
import setting from "@/config/index";

const settingStore = useSettingStore();
const { collapse } = storeToRefs(settingStore);
</script>

<style lang="scss" scoped>
.logo {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6b9bcc;
  color: #fff;
  box-sizing: border-box;
  overflow: hidden;
  transition: width 0.3s;

  img {
    width: 40px;
    height: 40px;
  }
}

a {
  text-decoration: none;
}
</style>
