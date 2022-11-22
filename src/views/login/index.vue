<template>
  <div class="login-page">
    <el-button @click="loginHandler"> 登录 </el-button>
  </div>
</template>

<script setup lang="ts">
import { loginApi } from "@/api/login/login";

const loginHandler = () => {
  loginApi({ username: "admin", password: "123456" }).then((res) => {
    console.log(res);
  });
};
</script>

<style scoped lang="scss">
.login-page {
  background: #172533;
  height: 100vh;
  width: 100%;
  color: #fff;
}
</style>
