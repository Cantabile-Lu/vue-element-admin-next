<template>
  <div>
    <el-menu
      active-text-color="red"
      background-color="#409EFF"
      class="el-menu-vertical-demo"
      default-active="2-1"
    >
      <el-menu-item index="1">
        <el-icon>
          <CircleCheck />
        </el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <CircleCheck />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3">
        <el-icon>
          <CircleCheck />
        </el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item disabled index="4">
        <el-icon>
          <CircleCheck />
        </el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon>
          <CircleCheck />
        </el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { CircleCheck } from "@element-plus/icons-vue";
</script>

<style scoped></style>
