<template>
  <AnimationTransition appear>
    <component :is="menuComponent" :itemOrMenu="item">
      <template v-if="item.children && item.children.length">
        <VeaSider
          v-for="route in item.children"
          :key="route.path"
          :item="route"
        />
      </template>
    </component>
  </AnimationTransition>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import VeaMenuItem from "./components/VeaMenuItem.vue";
import VeaSubMenu from "./components/VeaSubMenu.vue";
import AnimationTransition from "@/components/AnimateTransition/index.vue";

export default defineComponent({
  components: {
    VeaMenuItem,
    VeaSubMenu,
    AnimationTransition
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const menuComponent = computed(() => {
      return !props.item.alwaysShow && props.item.children
        ? "VeaSubMenu"
        : "VeaMenuItem";
    });
    const layout = "horizontal";

    const animation = "animate__animated animate__bounceInRight";
    return {
      layout,
      animation,
      menuComponent
    };
  }
});
</script>

<style lang="scss" scoped></style>
