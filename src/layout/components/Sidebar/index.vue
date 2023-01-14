<template>
  <transition appear mode="out-in" name="slide-fade">
    <component :is="menuComponent" :itemOrMenu="item">
      <template v-if="item.children && item.children.length">
        <SideBar
          v-for="route in item.children"
          :key="route.path"
          :item="route"
        />
      </template>
    </component>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import MenuItem from "./components/menuItem.vue";
import SubMenuItem from "./components/subMenu.vue";

export default defineComponent({
  name: "SideBar",
  components: {
    MenuItem,
    SubMenuItem
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
    return {
      layout,
      menuComponent
    };
  }
});
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
