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

<script setup lang="ts">
import { Footer, Main, Header, Aside } from "@/layout/components";
</script>

<style scoped lang="scss"></style>
