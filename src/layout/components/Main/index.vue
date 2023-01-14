<template>
  <el-main style="border: 1px solid blue">
    <router-view v-slot="{ Component, route }">
      <transition enter-active-class="animate__animated animate__bounceInDown">
        <component :is="Component" :key="route.path" ref="componentRef" />
      </transition>
    </router-view>
  </el-main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
