<template>
  <div class="common-layout">
    <component :is="theme[active]" :collapse="collapse" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import defaultTheme from "./theme/default/index.vue";

const theme = {
  defaultTheme
};
const active = ref("defaultTheme");

const collapse = ref(false);
</script>

<style lang="scss" scoped></style>
