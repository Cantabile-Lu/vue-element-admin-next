<template>
  <div>
    <el-button>Default</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <div v-for="item in 100">{{ item }}</div>
  </div>
</template>

<script lang="ts" setup>
import { vnRequest } from "@/utils/request";

interface IRepson {
  data: any;
  returnCode: string;
  success: boolean;
}

function getList() {
  return vnRequest.get<IRepson>({
    url: "http://123.207.32.32:8000/home/multidata",
    loading: true
  });
}

getList().then((res) => {
  // console.log(res.success);
  // console.log(res.data);
});

// vnRequest.request({
//   url: "http://123.207.32.32:8000/home/multidata",
//   method: "get",
//   loading: true
//   // interceptors: {
//   //   responseInterceptor: (res) => {
//   //     console.log(res);
//   //     return res;
//   //   }
//   // }
// });
</script>

<style lang="scss" scoped></style>
