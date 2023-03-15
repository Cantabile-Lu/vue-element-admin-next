<template>
  <div :class="{ collapse: collapse }" class="sidebar-logo-container">
    <AnimationTransition>
      <router-link v-if="collapse" class="sidebar-logo-link" to="/">
        <el-image
          alt="logo"
          class="sidebar-logo"
          fit="cover"
          src="../../../../public/logo.png"
        />
      </router-link>
      <router-link v-else class="sidebar-logo-link" to="/">
        <el-image
          alt="logo"
          class="sidebar-logo"
          fit="cover"
          src="../../../../public/logo.png"
        />
        <h1 class="sidebar-title">{{ setting.title }}</h1>
      </router-link>
    </AnimationTransition>
  </div>
</template>

<script lang="ts" name="VeaLogo" setup>
import AnimationTransition from "@/components/AnimateTransition/index.vue";
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";
import setting from "@/config/index";

const settingStore = useSettingStore();
const { collapse } = storeToRefs(settingStore);
</script>

<style lang="scss" scoped>
.sidebar-logo-container {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: var(--el-menu-bg-color);

  & .sidebar-logo-link {
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    & .sidebar-logo {
      width: 50px;
      height: 50px;
    }

    & .sidebar-title {
      color: var(--el-color-grey);
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      text-decoration: none !important;
    }
  }

  &.collapse {
    .sidebar-logo-link {
      margin-left: 16px;
    }
  }
}
</style>
