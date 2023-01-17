<script lang="ts" setup>
import SvgIcon from "@/components/SvgIcon/index.vue";
import { useRouter } from "vue-router";

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
    <SvgIcon v-if="itemOrMenu.meta?.icon" :name="itemOrMenu.meta.icon" />
    <span>
      {{ itemOrMenu.meta?.title }}
    </span>
  </el-menu-item>
</template>

<style lang="scss" scoped></style>
