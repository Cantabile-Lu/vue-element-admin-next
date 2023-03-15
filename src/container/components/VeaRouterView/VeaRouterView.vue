<template>
  <router-view v-slot="{ Component, route }">
    <transition enter-active-class="animate__animated animate__bounceInDown">
      <component :is="Component" :key="route.path" ref="componentRef" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup></script>
