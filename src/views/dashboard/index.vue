<template>
  <div>
    <el-button v-for="item in 3" :key="item" type="primary"
      >item{{ item }}</el-button
    >
    <SvgIcon name="area" />
  </div>
</template>

<script lang="ts" setup>
import { vnRequest } from "@/utils/request";
import SvgIcon from "@/components/SvgIcon/index.vue";

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
