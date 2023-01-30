<script lang="ts" setup>
const size = $ref("small");

function fn(n: number) {
  if (n > 5) {
    return true;
  } else {
    return false;
  }
}

fn(12);
</script>

<template>
  <el-config-provider :size="size">
    <router-view v-slot="{ Component }">
      <transition :name="'fade'" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </el-config-provider>
</template>
