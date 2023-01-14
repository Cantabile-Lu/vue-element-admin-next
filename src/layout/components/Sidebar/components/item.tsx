import { defineComponent } from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";

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
        VNodes.push(<SvgIcon name={props.item.icon}></SvgIcon>);
      }
      if (props.item.title) {
        VNodes.push(<span v-slot="title">{props.item.title}</span>);
      }
      return VNodes;
    };
  }
});
