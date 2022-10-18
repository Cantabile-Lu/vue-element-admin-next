<script setup lang="ts">
const size = $ref("small");
</script>

<template>
  <el-config-provider :size="size">
    <router-view />
  </el-config-provider>
</template>
