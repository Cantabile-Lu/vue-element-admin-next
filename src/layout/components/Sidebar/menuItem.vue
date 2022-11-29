<template>
  <el-menu-item :index="itemOrMenu.path" @click="handleLink">
    <span :title="itemOrMenu.meta.title">
      {{ itemOrMenu.meta.title }}
    </span>
    <el-tag v-if="itemOrMenu.meta.badge" effect="dark" type="danger">
      {{ itemOrMenu.meta.badge }}
    </el-tag>
    <span v-if="itemOrMenu.meta.dot" class="vab-dot vab-dot-error">
      <span></span>
    </span>
  </el-menu-item>
</template>

<script lang="ts" setup>
defineProps({
  itemOrMenu: {
    type: Object,
    default: () => ({})
  }
});
const handleLink = () => {
  console.log("点击");
};
</script>
