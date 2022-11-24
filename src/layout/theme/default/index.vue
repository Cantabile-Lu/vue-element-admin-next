<template>
  <div class="common-layout">
    <el-container>
      <Aside />
      <el-container direction="vertical">
        <Header />
        <el-container direction="vertical">
          <Main />
          <Footer />
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { Aside, Footer, Header, Main } from "@/layout/components";

defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped></style>
