<template>
  <el-main>
    <router-view v-slot="{ Component, route }">
      <transition enter-active-class="animate__animated animate__bounceInDown">
        <component :is="Component" :key="route.path" ref="componentRef" />
      </transition>
    </router-view>
  </el-main>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref();
</script>

<style lang="scss" scoped>
.el-main {
  border: 1px solid blue;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
