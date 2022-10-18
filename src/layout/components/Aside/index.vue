<template>
  <el-aside
    width="200px"
    style="border: 1px solid blue; height: 100vh; box-sizing: border-box"
  >
    <Logo />

    <Sidebar />
  </el-aside>
</template>

<script setup lang="ts">
import { Logo, Sidebar } from "@/layout/components";
</script>

<style scoped lang="scss"></style>
