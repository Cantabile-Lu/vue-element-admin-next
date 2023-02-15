<script lang="ts" setup>
import { ref } from "vue";

const size = ref("small");
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
