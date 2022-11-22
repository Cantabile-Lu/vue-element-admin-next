<template>
  <div>这里是首页仪表盘</div>
</template>

<script setup lang="ts">
import { vnRequest } from "@/utils/request";
interface IRepson {
  data: any;
  returnCode: string;
  success: boolean;
}

function getList() {
  return vnRequest.request<IRepson>({
    url: "http://123.207.32.32:8000/home/multidata",
    method: "get"
  });
}
getList().then((res) => {
  console.log(res);
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

<style scoped lang="scss"></style>
