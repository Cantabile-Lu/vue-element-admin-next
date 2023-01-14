<script lang="ts" setup>
import SvgIcon from "@/components/SvgIcon/index.vue";

defineProps({
  itemOrMenu: {
    type: Object,
    default() {
      return null;
    }
  }
});
</script>

<template>
  <el-sub-menu :index="itemOrMenu.path">
    <template #title>
      <SvgIcon v-if="itemOrMenu.meta?.icon" :name="itemOrMenu.meta.icon" />
      <span>
        {{ itemOrMenu.meta?.title }}
      </span>
    </template>
    <slot></slot>
  </el-sub-menu>
</template>
