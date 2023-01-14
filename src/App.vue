<script lang="ts" setup>
import { onMounted } from "vue";

const size = $ref("small");

onMounted(() => {
  document
    .getElementsByTagName("body")[0]
    .setAttribute("data-theme", "default");
});
</script>

<template>
  <el-config-provider :size="size">
    <router-view v-slot="{ Component }">
      <transition :name="'fade'" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </el-config-provider>
</template>
