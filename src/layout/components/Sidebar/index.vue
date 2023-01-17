<template>
  <AnimationTransition appear>
    <component :is="menuComponent" :itemOrMenu="item">
      <template v-if="item.children && item.children.length">
        <SideBar
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
import MenuItem from "./components/menuItem.vue";
import SubMenuItem from "./components/subMenu.vue";
import AnimationTransition from "@/components/AnimateTransition/index.vue";

export default defineComponent({
  name: "SideBar",
  components: {
    MenuItem,
    SubMenuItem,
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
        ? "SubMenuItem"
        : "MenuItem";
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
