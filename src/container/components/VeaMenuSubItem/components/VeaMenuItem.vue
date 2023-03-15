<script lang="ts" setup>
import { useRouter } from "vue-router";
// import VeaIcon from "@/container/components/VeaIcon/VeaIcon.vue";

const props = defineProps({
  itemOrMenu: {
    type: Object,
    default() {
      return null;
    }
  }
});
const router = useRouter();
const handleLink = () => {
  const routePath = props.itemOrMenu.path;
  router.push(routePath);
};
</script>

<template>
  <el-menu-item :index="itemOrMenu.path" @click="handleLink">
    <VeaIcon v-if="itemOrMenu.meta?.icon" :name="itemOrMenu.meta.icon" />
    <span>
      {{ itemOrMenu.meta?.title }}
    </span>
  </el-menu-item>
</template>

<style lang="scss" scoped></style>
