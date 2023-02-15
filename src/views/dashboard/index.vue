<template>
  <div>
    <el-row :gutter="20" class="mt-10px">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>

    <el-image
      alt="千图网alt"
      src="https://preview.qiantucdn.com/58pic/40/85/17/16u58PIC4HJjyXtaywpSQ_PIC2018.png!w1024_new_0_1"
    />
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
