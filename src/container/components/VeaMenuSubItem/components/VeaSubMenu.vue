<script lang="ts" setup>
// import VeaIcon from "@/container/components/VeaIcon/VeaIcon.vue";

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
      <VeaIcon v-if="itemOrMenu.meta?.icon" :name="itemOrMenu.meta.icon" />
      <span>
        {{ itemOrMenu.meta?.title }}
      </span>
    </template>
    <slot></slot>
  </el-sub-menu>
</template>

<style lang="scss" scoped></style>
