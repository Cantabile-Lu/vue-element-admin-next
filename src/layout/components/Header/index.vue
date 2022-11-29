<template>
  <el-header>
    <Expand />
    <div>这里是姓名</div>
  </el-header>
</template>

<script lang="ts" setup>
import Expand from "./expand";
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0 10px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
