<script setup lang="ts">
const value = $ref("来了!老弟");
const nums = [12, 13, "14"];

console.log(nums);
</script>

<template>
  <el-button>{{ value }}</el-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
