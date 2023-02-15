import { defineComponent } from "vue";
import { useSettingStore } from "@/store/useSetting";
import { storeToRefs } from "pinia";
import { Expand, Fold } from "@element-plus/icons-vue";
import { ElIcon } from "element-plus";

export default defineComponent({
  name: "VeaExpand",
  setup() {
    const settingStore = useSettingStore();
    const { collapse } = storeToRefs(settingStore);
    const { collapseChange } = settingStore;
    const iconHandler = () => {
      collapseChange();
    };
    return () => {
      return (
        <div onClick={iconHandler}>
          <ElIcon size={"23px"} color={"#999"}>
            {collapse.value ? <Expand /> : <Fold />}
          </ElIcon>
        </div>
      );
    };
  }
});
