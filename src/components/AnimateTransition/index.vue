<template>
  <transition
    :enter-active-class="animation"
    appear
    mode="out-in"
    name="custom-class"
    v-bind="$attrs"
  >
    <slot></slot>
  </transition>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import Settings from "@/config/setting";

const animation = computed(() => {
  return `animate__animated ${Settings.asideAnimation}`;
});
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
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
