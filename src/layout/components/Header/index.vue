<template>
  <el-header style="border: 1px solid red">
    <el-switch v-model="isExpand" />
  </el-header>
</template>

<script setup lang="ts">
import { useExpand } from "@/hooks/useExpand";

const expan = useExpand();
const isExpand = expan.getExpand();
</script>

<style scoped lang="scss"></style>
