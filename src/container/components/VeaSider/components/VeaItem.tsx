import { defineComponent } from "vue";
import VeaIcon from "@/container/components/VeaIcon/VeaIcon.vue";

export default defineComponent({
  name: "Item",
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    return () => {
      const VNodes = [];
      if (props.item.icon) {
        VNodes.push(<VeaIcon name={props.item.icon}></VeaIcon>);
      }
      if (props.item.title) {
        VNodes.push(<span v-slot="title">{props.item.title}</span>);
      }
      return VNodes;
    };
  }
});
