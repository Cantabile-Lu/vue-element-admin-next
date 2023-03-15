<script lang="ts" setup>
/**
 * 1: 确定布局
 * 2: 添加数据
 * 3: 修改样式
 * */
</script>

<template>
  <el-config-provider size="small">
    <router-view v-slot="{ Component }">
      <transition :name="'fade'" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </el-config-provider>
</template>
