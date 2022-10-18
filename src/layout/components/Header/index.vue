<template>
  <el-header style="border: 1px solid red">
    <el-switch v-model="value1" />
  </el-header>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value1 = ref(false);
</script>

<style scoped lang="scss"></style>
