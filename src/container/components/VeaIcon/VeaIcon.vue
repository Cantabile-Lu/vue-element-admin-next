<template>
  <svg :class="svgClass" :style="{ color: color }" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ""
  }
});
const iconName = computed(() => `#icon-${props.name}`);
const svgClass = computed(() => {
  if (props.name) return `svg-icon icon-${props.name}`;
  return "svg-icon";
});
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 2em;
  height: 2em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
